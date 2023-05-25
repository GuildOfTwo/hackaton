from rest_framework import viewsets
from django.db.models import Avg
from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from buildings.models import Building, Booking, Spec
from api.serializers import (CommentSerializer,
                             BuildingSerializer,
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
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ('id',)


class BuildingViewSet(viewsets.ModelViewSet):
    queryset = Building.objects.all()
    queryset = Building.objects.annotate(
        rating=Avg('comments__score')).order_by('title')
    serializer_class = BuildingSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ('specialization', 'area_sum', 'area_rent',
                        'capacity', 'cost')


class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer


class SpecViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Spec.objects.all()
    serializer_class = SpecSerializer
