from dataclasses import fields
from rest_framework.serializers import ModelSerializer
from .models import Key, Note
from .models import User
from .models import Product
from .models import A
from .models import Data
class NoteSerializer(ModelSerializer):
    class Meta:
        model  = Note
        fields = '__all__'

class KeySerializer(ModelSerializer):
    class Meta:
        model  = Key
        fields = '__all__'



class UserNoteSerializer(ModelSerializer):
    class Meta:
        model  = User
        fields = '__all__'


class ProductNoteSerializer(ModelSerializer):
    class Meta:
        model  = Product
        fields = '__all__'

class LetterSerializer(ModelSerializer):
    class Meta:
        model  = A
        fields = '__all__'
class DataSerializer(ModelSerializer):
    class Meta:
        model  = Data
        fields = '__all__'