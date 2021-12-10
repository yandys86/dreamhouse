from django.db import models
from cloudinary.models import CLOUDINARY_FIELD_DB_RE, CloudinaryField

# Create your models here.


class Tag(models.Model):
    class Meta(object):
        db_table = 'tag'

    name = models.CharField('Name', max_length=50,
                            null=False, blank=False, db_index=True, default="")

    image = CloudinaryField('image', blank=True, null=True)

    description = models.CharField(
        'Description', blank=True, null=True, max_length=100
    )
    type = models.CharField(
        'Type', blank=False, null=True, max_length=50, db_index=True
    )
    created_at = models.DateTimeField(
        ("Created At"), auto_now=True, auto_now_add=False)
    updated_at = models.DateTimeField(
        ("Updated At"), auto_now=True, auto_now_add=False)

    def __str__(self):
        return self.name
