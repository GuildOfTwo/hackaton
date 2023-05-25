from rest_framework import validators
from rest_framework.generics import get_object_or_404
from rest_framework.relations import SlugRelatedField
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from comments.models import Comment
from buildings.models import Building, BuildingImage, Spec
from users.models import (RenterIndividual, RenterIndividualProfile,
                          RenterLegal, RenterLegalProfile,
                          Landlord, LandlordProfile)
from rest_framework.validators import UniqueValidator, UniqueTogetherValidator


class RenterIndividualProfileSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()

    class Meta:
        model = RenterIndividualProfile
        fields = ('__all__')


class RenterLegalProfileSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()

    class Meta:
        model = RenterLegalProfile
        fields = ('__all__')


class LandlordProfileSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()

    class Meta:
        model = LandlordProfile
        fields = ('__all__')


class CommentSerializer(serializers.ModelSerializer):
    author = serializers.SlugRelatedField(
        read_only=True, slug_field='email'
    )
    class Meta:
        model = Comment
        fields = (
            'author',
            'text',
            'pub_date',
            'score',
        )


class BookingSerializer(serializers.ModelSerializer):
    building = serializers.SlugRelatedField(
        read_only=True, slug_field='title'
    )
    renter = serializers.SlugRelatedField(
        read_only=True, slug_field='email'
    )
    class Meta:
        model = Comment
        fields = (
            'building',
            'renter',
            'check_in',
            'check_out',
        )


class BuildingImageModelSerializer(ModelSerializer):
    class Meta:
        model = BuildingImage
        fields = ('image',)


class SpecSerializer(serializers.ModelSerializer):
    slug = serializers.SlugField(
        max_length=200,
        validators=(UniqueValidator(queryset=Spec.objects.all()),)
    )

    class Meta:
        model = Spec
        fields = ('id', 'name', 'slug')
        lookup_field = 'slug'



class BuildingGetSerializer(ModelSerializer):
    building_images = BuildingImageModelSerializer(
        many=True
    )
    rating = serializers.FloatField()
    bookings = serializers.ListField(child=serializers.CharField(), min_length=1)
    spec = 

    def to_internal_value(self, data):
        bookings_val = data.get('bookings')
        output = super(BuildingGetSerializer, self).to_internal_value(data)
        output['bookings'] = ','.join(bookings_val)
        return output

    def to_representation(self, instance):
        bookings_val = instance.bookings.split(',')
        output = super(BuildingGetSerializer, self).to_representation(instance)
        output['bookings'] = bookings_val
        return output


    class Meta:
        model = Building
        fields = (
            'id',
            'owner',
            'title',
            'specialization',
            'desc',
            'address',
            'coordinates',
            'operating_hours',
            'site',
            'area_sum',
            'area_rent',
            'features',
            'additional_information',
            'building_images',
            'capacity',
            'cost',
            'bookings',
            'rating'
        )