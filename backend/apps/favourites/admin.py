from django.contrib import admin
from .models import Favourite

# Register your models here.


class FavouriteAdmin(admin.ModelAdmin):
    list_display = ('id', 'house_id', 'created_at')


admin.site.register(Favourite, FavouriteAdmin)
