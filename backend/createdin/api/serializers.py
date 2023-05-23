from rest_framework import validators
from rest_framework.generics import get_object_or_404
from rest_framework.relations import SlugRelatedField
from rest_framework import serializers
from comments.models import Comment
from buildings.models import Building, BuildingPhoto
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


class BuildingsPhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = BuildingPhoto
        fields = ['building', 'photo']


class BuildingsSerializer(serializers.ModelSerializer):
    owner = serializers.SlugRelatedField(
        read_only=True, slug_field='email'   # нужно поменят слаг - и нас нет юзернейма
    )
    images = BuildingsPhotoSerializer(
        many=True
    )

    class Meta:
        model = Building
        fields = (
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
            'capacity',
            # 'comments',
            'cost',
            'images'
        )
