from rest_framework import serializers
from objects.models import Object, ObjectPhoto


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
            'photo'
        )