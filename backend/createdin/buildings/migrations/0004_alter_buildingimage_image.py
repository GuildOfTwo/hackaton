# Generated by Django 4.2.1 on 2023-05-26 13:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('buildings', '0003_alter_buildingimage_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='buildingimage',
            name='image',
            field=models.ImageField(blank=True, help_text='Выберите изображение', upload_to='building_images/%Y/%m/%d/', verbose_name='Изображение'),
        ),
    ]