from rest_framework import viewsets
from django.db.models import Avg
from django.shortcuts import render
from objects.models import Object
from api.serializers import (CommentSerializer,
                             ObjectSerializer,
                             RenterIndividualProfileSerializer,
                             RenterLegalProfileSerializer,
                             LandlordProfileSerializer)
from comments.models import Comment
from users.models import (RenterIndividualProfile,
                          RenterLegalProfile,
                          LandlordProfile)


class RenterIndividualProfileViewSet(viewsets.ModelViewSet):
    queryset = RenterIndividualProfile.objects.all()
    serializer_class = RenterIndividualProfileSerializer


class RenterLegalProfileViewSet(viewsets.ModelViewSet):
    queryset = RenterLegalProfile.objects.all()
    serializer_class = RenterLegalProfileSerializer


class LandlordProfileViewSet(viewsets.ModelViewSet):
    queryset = LandlordProfile.objects.all()
    serializer_class = LandlordProfileSerializer


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class ObjectViewSet(viewsets.ModelViewSet):
    queryset = Object.objects.annotate(
        rating=Avg('comments__score')).order_by('title')
    serializer_class = ObjectSerializer 