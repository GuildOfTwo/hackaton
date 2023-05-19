from rest_framework import serializers
from comments.models import Comment


class CommentSerializer(serializers.ModelSerializer):
    owner = serializers.SlugRelatedField(
        read_only=True, slug_field='username'
    )
    class Meta:
        model = Comment
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
            'cost'
        )

# дописать добавление списка фото в выдачу