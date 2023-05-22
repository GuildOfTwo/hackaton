
from django.conf import settings

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [

        migrations.swappable_dependency(settings.AUTH_USER_MODEL),

        ('comments', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Object',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(help_text='Введите название обьекта', max_length=200, verbose_name='Название')),
                ('specialization', models.TextField(blank=True, help_text='Опишите специализацию обьекта', verbose_name='Специализация')),
                ('desc', models.TextField(blank=True, help_text='Введите описание площадки', verbose_name='Описание площадки')),
                ('address', models.CharField(max_length=12, verbose_name='Адрес объекта')),
                ('coordinates', models.CharField(max_length=12, verbose_name='Координаты объекта')),
                ('operating_hours', models.CharField(blank=True, max_length=12, verbose_name='Режим работы')),
                ('site', models.CharField(help_text='Введите сайт объекта', max_length=40, verbose_name='Сайт объекта')),
                ('area_sum', models.PositiveIntegerField(blank=True, help_text='Введите общую площадь имущественного комплекса (кв. м)', verbose_name='Общая площадь имущественного комплекса (кв. м)')),
                ('area_rent', models.PositiveIntegerField(blank=True, help_text='Введите свободную арендопригодную площадь (кв. м)', verbose_name='Свободная арендопригодная площадь (кв. м)')),
                ('features', models.TextField(blank=True, help_text='Напишите объекты коллективного пользования, спец. оборудование объектов и т.д. ', verbose_name='Особенности')),
                ('additional_information', models.TextField(blank=True, help_text='Введите важную по вашему мнению дополнительную информацию', verbose_name='Дополнительная информация')),
                ('capacity', models.CharField(blank=True, help_text='Введите вместимость обьекта (кол. людей)', max_length=200, verbose_name='Вместимость обьекта')),
                ('cost', models.CharField(blank=True, help_text='Введите стоимость аренды', max_length=200, verbose_name='Стоимость')),
                ('comments', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='object', to='comments.comment', verbose_name='Отзыв')),
                ('owner', models.ForeignKey(help_text='Выберите контактное лицо/владельца обьекта', on_delete=django.db.models.deletion.CASCADE, related_name='objects', to=settings.AUTH_USER_MODEL, verbose_name='Владелец')),
            ],
            options={
                'verbose_name': 'Объект',
                'verbose_name_plural': 'Обьекты',
                'ordering': ['-cost'],
            },
        ),
        migrations.CreateModel(
            name='ObjectPhoto',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('photo', models.ImageField(blank=True, help_text='Выберите фотографию', upload_to='objects_images/%Y/%m/%d/', verbose_name='Фотография')),
                ('object', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='object_photo', to='objects.object')),
            ],
            options={
                'verbose_name': 'Фотография площадки',
                'verbose_name_plural': 'Фотографии площадки',
            },
        ),
    ]
