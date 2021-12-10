
from django.shortcuts import render
from rest_framework import generics, filters
from .serializers import FavouriteSerializer
from rest_framework import generics
from django.http import JsonResponse
from .models import Favourite
from django_filters.rest_framework import DjangoFilterBackend

# Create your views here.


class FavouriteListView(generics.ListAPIView):
    queryset = Favourite.objects.order_by('-created_at')
    serializer_class = FavouriteSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['house_id']
    search_fields = ['id', 'created_at', 'updated_at']


class FavouriteDetailView(generics.RetrieveAPIView, generics.UpdateAPIView):
    queryset = Favourite.objects.all()
    serializer_class = FavouriteSerializer


class FavouriteAddView(generics.CreateAPIView):
    queryset = Favourite.objects.all()
    serializer_class = FavouriteSerializer


class FavouriteDeleteView(generics.DestroyAPIView):
    queryset = Favourite.objects.all()
    serializer_class = FavouriteSerializer
