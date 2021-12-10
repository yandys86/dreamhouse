from django.db import models
from apps.home.models import Home

# Create your models here.


class Favourite(models.Model):
    class Meta(object):
        db_table = 'favourite'
    house_id = models.ForeignKey(Home, on_delete=models.CASCADE, db_index=True)
    created_at = models.DateTimeField(
        'Created Datetime', blank=True, auto_now_add=True
    )
    updated_at = models.DateTimeField(
        'Updated Datetime', blank=True, auto_now=True
    )
