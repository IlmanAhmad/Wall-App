from django.shortcuts import render
from rest_framework import status
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from postapiapp.models import Post, USERPROFILE
from .serializer import PostSerializer, CustomUserSerializer


# Create your views here.
class ReadOnlyPostView(APIView):
    """API View class for Post Read only serializer"""
    serializer_class = PostSerializer

    def get(self, request):
        """function for get request"""
        post_data = [{"user_name": post_data.user_name, "post_desc": post_data.post_desc, "time_stamp": post_data.time_stamp}
        for post_data in Post.objects.all()]
        return Response(post_data)


class PostView(APIView):
    """API View class for Post serializer"""
    
    permission_classes = [IsAuthenticated]
    serializer_class = PostSerializer

    def post(self, request): 
        """function to add new posts"""
        serializer = PostSerializer(data=request.data) 
        if serializer.is_valid(raise_exception=True): 
            serializer.save() 
            return  Response(serializer.data)

class CustomUserSignUp(APIView):
    """API View for signup request"""

    serializer_class = CustomUserSerializer
    def post(self, request):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            USERPROFILE = serializer.save()
            if USERPROFILE:
                return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



