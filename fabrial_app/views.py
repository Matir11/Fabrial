from django.shortcuts import render
from rest_framework.decorators import api_view
from django.http import HttpResponse

# Create your views here.
def fabrial(request):
    return render(request, 'fabrial_app/index.html')

def public(request):
    return HttpResponse("You don't need to be authenticated to see this")

@api_view(['GET'])
def private(request):
    return HttpResponse("You should not see this message if not authenticated!")