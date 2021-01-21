from rest_framework import serializers
from postapiapp.models import Post, USERPROFILE
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    """Serializer for adding username and id in response"""

    def validate(self, attrs):
        
        data = super(MyTokenObtainPairSerializer, self).validate(attrs)
        data.update({'user': self.user.name})
        data.update({'id': self.user.id})
        
        return data



class PostSerializer(serializers.ModelSerializer):
    """serializer for Post model"""
    class Meta:
        model = Post
        fields = ['id', 'user_name', 'post_desc', 'time_stamp']


class CustomUserSerializer(serializers.ModelSerializer):
    """serializer for Userprofile model."""
    email = serializers.EmailField(required=True)
    name = serializers.CharField(required=True)
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = USERPROFILE
        fields = ('email', 'name', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


