# Generated by Django 4.2.1 on 2023-05-25 13:42

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField(help_text='Введите текст отзыва', verbose_name='Текст отзыва')),
                ('pub_date', models.DateTimeField(auto_now_add=True, db_index=True, help_text='Дата публикации отзыва', verbose_name='Дата публикации отзыва')),
                ('score', models.IntegerField(help_text='Введдите оценку', validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(10)], verbose_name='Оценка')),
            ],
            options={
                'verbose_name': 'Отзыв',
                'verbose_name_plural': 'Отзывы',
                'ordering': ['-pub_date'],
            },
        ),
    ]
