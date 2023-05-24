from rest_framework import viewsets
from django.db.models import Avg
from django.shortcuts import render
from buildings.models import Building, Booking
from api.serializers import (CommentSerializer,
                             BuildingsSerializer,
                             RenterIndividualProfileSerializer,
                             RenterLegalProfileSerializer,
                             LandlordProfileSerializer,
                             BookingSerializer)
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


class BuildingViewSet(viewsets.ModelViewSet):
    queryset = Building.objects.annotate(
        rating=Avg('comments__score')).order_by('title')
    serializer_class = BuildingsSerializer


class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer