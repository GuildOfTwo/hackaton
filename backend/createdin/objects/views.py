from django.shortcuts import render
from django.db.models import Avg
from .models import Object

# Заготовка под расчет среднего значения рейтинга объекта
class ObjectViewSet(viewsets.ModelViewSet):
    queryset = Object.objects.annotate(
        rating=Avg('comments__score')).order_by('name')
