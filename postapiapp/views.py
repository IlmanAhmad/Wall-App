from django.shortcuts import render
from rest_framework import status
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from postapiapp.models import Post, USERPROFILE
from .serializer import PostSerializer, CustomUserSerializer, MyTokenObtainPairSerializer
from django.core.mail import send_mail
from django.conf import settings
from rest_framework_simplejwt.views import TokenObtainPairView

# Create your views here.

class Customtokengen(TokenObtainPairView):
    """
    API View for custom TokenObtainPairView 
    """
    serializer_class = MyTokenObtainPairSerializer


class ReadOnlyPostView(APIView):
    """
    API View class for Read only - PostSerializer
    """
    serializer_class = PostSerializer

    def get(self, request):
        """function for fetching posts from db and send to frontend"""
        post_data = [{"user_name": post_data.user_name, "post_desc": post_data.post_desc, "time_stamp": post_data.time_stamp}
                     for post_data in Post.objects.all()]
        return Response(post_data)


class PostView(APIView):
    """
    API View class for New Posts - PostSerializer
    """

    serializer_class = PostSerializer

    def post(self, request):
        """
        function to add handle new posts request
        """
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


class CustomUserSignUp(APIView):
    """
    API View for signup request
    """

    serializer_class = CustomUserSerializer

    def post(self, request):
        """
        function to handle new signup request
        """
        json_data = request.data
        email = json_data.get("email", "0")

        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            USERPROFILE = serializer.save()
            send_mail(
                'Welcome email',
                'Welcome to iWall Posting App.',
                settings.EMAIL_HOST_USER,
                [email],
                fail_silently=False,
            )
            if USERPROFILE:
                return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
