from rest_framework import validators
from rest_framework.generics import get_object_or_404
from rest_framework.relations import SlugRelatedField
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from comments.models import Comment
from buildings.models import Building, BuildingImage
from users.models import (Renter, RenterProfile, Landlord, LandlordProfile)
from buildings.models import Building, BuildingImage



class RenterProfileSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(
        slug_field='email',
        read_only=True
    )

    class Meta:
        model = RenterProfile
        fields = ('__all__')


class LandlordProfileSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(
        slug_field='email',
        read_only=True
    )

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
            'booking',
            'rating'
        )
