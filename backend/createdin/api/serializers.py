from rest_framework import validators
from rest_framework.generics import get_object_or_404
from rest_framework.relations import SlugRelatedField
from rest_framework import serializers
from comments.models import Comment
from objects.models import Object, ObjectPhoto
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
        read_only=True, slug_field='username'
    )
    class Meta:
        model = Comment
        fields = (
            'author',
            'text',
            'pub_date',
            'score',
        )


class ObjectPhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ObjectPhoto
        fields = ['object', 'photo']


class ObjectSerializer(serializers.ModelSerializer):
    owner = serializers.SlugRelatedField(
        read_only=True, slug_field='username'
    )
    images = ObjectPhotoSerializer(
        many=True
    )

    class Meta:
        model = Object
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
            'comments',
            'cost',
            'images'
        )