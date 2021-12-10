from django.urls import path
from . import views

urlpatterns = [
    path('', views.FavouriteListView.as_view(), name='favorite_list'),
    path('<int:pk>/', views.FavouriteDetailView.as_view(), name='favorite_detail'),
    path("add/", views.FavouriteAddView.as_view(), name="favourite_add"),
    path("delete/<int:pk>/", views.FavouriteDeleteView.as_view(),
         name="favourite_delete"),
]
