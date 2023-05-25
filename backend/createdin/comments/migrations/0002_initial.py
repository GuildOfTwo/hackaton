# Generated by Django 4.2.1 on 2023-05-25 16:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('buildings', '0002_initial'),
        ('users', '0001_initial'),
        ('comments', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='author',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='users.renter', verbose_name='Автор'),
        ),
        migrations.AddField(
            model_name='comment',
            name='building',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='buildings.building', verbose_name='Объект'),
        ),
        migrations.AddConstraint(
            model_name='comment',
            constraint=models.UniqueConstraint(fields=('author', 'building'), name='only_one_comment'),
        ),
    ]
