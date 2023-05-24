from rest_framework import viewsets
from django.db.models import Avg
from django.shortcuts import render
from buildings.models import Building
from api.serializers import (CommentSerializer,
                             BuildingsSerializer,
                             RenterProfileSerializer,
                             LandlordProfileSerializer)
from comments.models import Comment
from users.models import (RenterProfile,
                          LandlordProfile)


class RenterProfileViewSet(viewsets.ModelViewSet):
    queryset = RenterProfile.objects.all()
    serializer_class = RenterProfileSerializer


class LandlordProfileViewSet(viewsets.ModelViewSet):
    queryset = LandlordProfile.objects.all()
    serializer_class = LandlordProfileSerializer


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class BuildingViewSet(viewsets.ModelViewSet):
    queryset = Building.objects.annotate(
        rating=Avg('comments__score')).order_by('title')
    serializer_class = BuildingsSerializer
