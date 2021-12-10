from django.contrib import admin

from .models import Home


class HomeAdmin(admin.ModelAdmin):
    list_display = ('id', 'tag', 'price', 'rent_price', 'main_image', 'state')


admin.site.register(Home, HomeAdmin)
