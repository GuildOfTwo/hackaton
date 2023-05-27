from django.conf import settings
from django.core.mail import send_mail
from django.shortcuts import get_object_or_404
from rest_framework import viewsets
from django.db.models import Avg
from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from buildings.models import Building, Status
from api.serializers import (CommentSerializer,
                             BuildingGetSerializer,
                             BuildingPostSerializer,
                             RenterProfileSerializer,
                             LandlordProfileSerializer,
                             StatusSerializer)
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
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ('building',)
                        

class BuildingViewSet(viewsets.ModelViewSet):
    queryset = Building.objects.annotate(
        rating=Avg('comments__score')).order_by('title')
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ('specialization', 'area_sum', 'area_rent',
                        'capacity', 'cost')
    
    def get_serializer_class(self):
        if self.request.method == 'GET':
            return BuildingGetSerializer
        return BuildingPostSerializer
    
    
    def create(self, request, *args, **kwargs):
        print(request.data)
        # send_mail(
        #     message=(
        #     f'{request.user} забронировал ваш объект {request.data.title},'
        #     f'пожалуйста свяжитесь с ним по почте {request.user.email}'
        #     f'или по телефону {request.user.phone}',
        #     ),
        #     from_email=f'{request.user.email}',
        #     recipient_list=f'{request.data.email}',
        #     fail_silently=False
        # )
        return super().create(request, *args, **kwargs)
    
    def update(self, request, *args, **kwargs):
        print(self)
        print(request.data)
        print(kwargs)
        # send_mail()
        return super().update(request, *args, **kwargs)


class StatusViewSet(viewsets.ModelViewSet):
    queryset = Status.objects.all()
    serializer_class = StatusSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_fields = ('building',)