# Generated by Django 3.2.4 on 2021-12-17 22:32

import cloudinary.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(db_index=True, default='', max_length=50, verbose_name='Name')),
                ('image', cloudinary.models.CloudinaryField(blank=True, max_length=255, null=True, verbose_name='image')),
                ('description', models.CharField(blank=True, max_length=100, null=True, verbose_name='Description')),
                ('type', models.CharField(db_index=True, max_length=50, null=True, verbose_name='Type')),
                ('created_at', models.DateTimeField(auto_now=True, verbose_name='Created At')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Updated At')),
            ],
            options={
                'db_table': 'tag',
            },
        ),
    ]
