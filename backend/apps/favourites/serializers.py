from django.db.models import fields
from .models import Favourite
from rest_framework import serializers


class FavouriteSerializer(serializers.ModelSerializer):
    class Meta:
        model: Favourite
        fields = '__all__'
