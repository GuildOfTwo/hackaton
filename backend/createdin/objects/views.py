from rest_framework import viewsets 
from django.shortcuts import render
from django.db.models import Avg
from .models import Object
from .serializers import ObjectSerializer



class ObjectViewSet(viewsets.ModelViewSet):
    queryset = Object.objects.annotate(
        rating=Avg('comments__score')).order_by('name')
    serializer_class = ObjectSerializer 
    