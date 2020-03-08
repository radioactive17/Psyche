from django.shortcuts import render,redirect
from django.contrib import admin
from django.urls import path
from django.http import HttpResponseRedirect,HttpResponse,HttpRequest
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from .forms import UserRegistrationForm
from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.decorators import login_required
from django.utils import timezone
from .models import Patient
import requests

def home(request):
    return render(request,'users/home.html')

def register(request):
    if request.method == 'POST':
        messages.success(request,f'Account created successfully')
        '''
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            username=form.cleaned_data.get('username')
            messages.success(request,f'Account created successfully for {username}')
        '''
        return redirect('Register')
    else:
        form=UserRegistrationForm()
    return render(request,'users/signup.html',{'form':form})

def users_login(request):
    if request.method =='POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request,username=username,password=password)
        if user is not None:
            login(request,user)
            messages.success(request,f'Login Successfull')
            return redirect('Dashboard')
        else:
            messages.error(request,f'Login Unsuccessfull, Please enter valid credentials')
            return redirect('Login')
    return render(request,'users/login.html')

def users_logout(request):
    logout(request)
    return render(request,'users/home.html')

@login_required
def dashboard(request):
    patient = Patient.objects.all().filter(user_patient=request.user).order_by('-date_sess')[:1]
    context={
        'patient_results':patient,
    }
    return render(request,'users/dashboard.html',context)

@login_required
def check_aspmt(request):
    if request.method == 'POST':
        a1 = request.POST.get('a1')
        a2 = request.POST.get('a2')
        a3 = request.POST.get('a3')
        a4 = request.POST.get('a4')
        a5 = request.POST.get('a5')
        a6 = request.POST.get('a6')

        s1 = request.POST.get('s1')
        s2 = request.POST.get('s2')
        s3 = request.POST.get('s3')
        s4 = request.POST.get('s4')
        s5 = request.POST.get('s5')
        s6 = request.POST.get('s6')

        mt1 = request.POST.get('mt1')
        mt2 = request.POST.get('mt2')
        mt3 = request.POST.get('mt3')
        mt4 = request.POST.get('mt4')
        mt5 = request.POST.get('mt5')
        mt6 = request.POST.get('mt6')

        pt1 = request.POST.get('pt1')
        pt2 = request.POST.get('pt2')
        pt3 = request.POST.get('pt3')
        pt4 = request.POST.get('pt4')
        pt5 = request.POST.get('pt5')
        pt6 = request.POST.get('pt6')
        print(f'--------------{a1} {s1} {pt1} {mt1}------------')

        #total_a =a1+a2+a3+a4+a5+a6
        total_a = int(a1) + int(a2) + int(a3) + int(a4) + int(a5) + int(a6)
        total_a_percent = (total_a/24)*100

        total_s = int(s1) + int(s2) + int(s3) + int(s4) + int(s5) + int(s6)
        total_s_percent = (total_s/24)*100

        total_mt = int(mt1) + int(mt2) + int(mt3) + int(mt4) + int(mt5) + int(mt6)
        total_mt_percent = (total_mt/24)*100

        total_pt = int(pt1) + int(pt2) + int(pt3) + int(pt4) + int(pt5) + int(pt6)
        total_pt_percent = (total_pt/24)*100

        current_user = request.user
        patient = Patient(user_patient=current_user,anxiety_lvl = total_a_percent,stress_lvl = total_s_percent,mt_lvl = total_mt_percent,pt_lvl = total_pt_percent,date_sess = timezone.now())
        patient.save()
        messages.success(request,'Your response has been recorded successfully!')
        return redirect('Dashboard')
    return render(request,'users/check_aspmt.html')

def group_session(request):
    response=requests.get("http://localhost:5000/")
    return HttpResponse(response.content)

def group_session_chat(request):
    response=requests.get("http://localhost:5000/login")
    return HttpResponse(response.content)
