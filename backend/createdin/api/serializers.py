from rest_framework import validators
from rest_framework.generics import get_object_or_404
from rest_framework.relations import SlugRelatedField
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from comments.models import Comment
from buildings.models import Building, BuildingImage, Status
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
            'building'
        )


class BuildingImageModelSerializer(ModelSerializer):
    class Meta:
        model = BuildingImage
        fields = ('image',)


class StatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Status
        fields = (
            'stat',
            'reject_text',
            'building',
        )


class BuildingSerializer(ModelSerializer):
    building_images = BuildingImageModelSerializer(
        many=True
    )
    # rating = serializers.FloatField()
    # building_status = StatusSerializer(many=True)

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
            # 'rating',
            # 'building_status',
            'entity',
            'phone',
            'email',
            'inn',
        )

    def create(self, validated_data):
        building_images = validated_data.pop('building_images', [])
        building = Building.objects.create(**validated_data)
        for image in building_images:
            BuildingImage.objects.create(image=image, building=building)
        return building
    
    def update(self, instance, validated_data):
        building_images = validated_data.pop('building_images', [])
        building = Building.objects.update(**validated_data)
        for image in building_images:
            BuildingImage.objects.create(image=image, building=building)
        return building


