from rest_framework import validators
from rest_framework.generics import get_object_or_404
from rest_framework.relations import SlugRelatedField
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from comments.models import Comment
from buildings.models import Building, BuildingImage
from users.models import (RenterIndividual, RenterIndividualProfile,
                          RenterLegal, RenterLegalProfile,
                          Landlord, LandlordProfile)



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


class BuildingSerializer(ModelSerializer):
    building_images = BuildingImageModelSerializer(
        many=True
    )
    rating = serializers.FloatField()

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
