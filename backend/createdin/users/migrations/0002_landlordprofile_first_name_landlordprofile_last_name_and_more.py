# Generated by Django 4.2.1 on 2023-05-27 16:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='landlordprofile',
            name='first_name',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Имя'),
        ),
        migrations.AddField(
            model_name='landlordprofile',
            name='last_name',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Фамилия'),
        ),
        migrations.AddField(
            model_name='landlordprofile',
            name='middle_name',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Отчество'),
        ),
        migrations.AddField(
            model_name='renterprofile',
            name='first_name',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Имя'),
        ),
        migrations.AddField(
            model_name='renterprofile',
            name='last_name',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Фамилия'),
        ),
        migrations.AddField(
            model_name='renterprofile',
            name='middle_name',
            field=models.CharField(blank=True, max_length=100, null=True, verbose_name='Отчество'),
        ),
    ]