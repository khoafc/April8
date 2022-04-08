from venv import create
from django.db import models

# Create your models here.
class Note(models.Model):
    body = models.TextField(null = True, blank = True)
    updated = models.DateTimeField(auto_now=True)
    create = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.body[0:50]

class User(models.Model):
    username = models.TextField(primary_key=True)    
    def __str__(self):
      return self.username

class Key(models.Model):
    username = models.TextField(primary_key=True) 
    keyword = models.TextField()   
    def __str__(self):
      return self.username


# class Product(models.Model):
#     # name = models.TextField()
#     # username = models.ForeignKey(User,on_delete=models.CASCADE)
#     # username = models.ForeignKey(User, on_delete=models.CASCADE)
#     username = models.TextField()
#     content = models.TextField()
    
#     def __str__(self):
#       return self.content




class Product(models.Model):
    # user = models.TextField()
    username = models.TextField()
    # username = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    
    def __str__(self):
      return self.content


class Data(models.Model):
    username = models.TextField(primary_key=True)
    word1 = models.TextField()    
    word2 = models.TextField()    
    word3 = models.TextField()    
    word4 = models.TextField()   
    word5 = models.TextField()   

    def __str__(self):
      return self.username


# class Total(models.Model):
#   a = models.TextField(null= False, blank=True)
#   b = models.TextField(null= False, blank=True)
#   c  =models.TextField(null= False, blank=True)
#   d = models.TextField(null= False, blank=True)
#   e = models.TextField(null= False, blank=True)
#   f = models.TextField(null= False, blank=True)
#   g = models.TextField(null= False, blank=True)
#   h = models.TextField(null= False, blank=True)
#   i =models.TextField(null= False, blank=True)
#   j = models.TextField(null= False, blank=True)
#   k = models.TextField(null= False, blank=True)
#   l = models.TextField(null= False, blank=True)
#   m = models.TextField(null= False, blank=True)
#   n = models.TextField(null= False, blank=True)
#   o = models.TextField(null= False, blank=True)
#   p = models.TextField(null= False, blank=True)
#   q = models.TextField(null= False, blank=True)
#   r = models.TextField(null= False, blank=True)
#   s = models.TextField(null= False, blank=True)
#   t = models.TextField(null= False, blank=True)
#   u = models.TextField(null= False, blank=True)
#   v = models.TextField(null= False, blank=True)
#   w = models.TextField(null= False, blank=True)
#   x = models.TextField(null= False, blank=True)
#   y = models.TextField(null= False, blank=True)
#   z =models.TextField(null= False, blank=True)
#   def __str__(self):
#     return self.a

class A(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
      
class B(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
class C(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
class D(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
      
class E(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
class F(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word

class G(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
      
class H(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
class I(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
class J(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
      
class K(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
class L(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word

class M(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
      
class N(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
class O(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
class P(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
      
class Q(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
class R(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word

class S(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
      
class T(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
class U(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
class V(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
      
class W(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
class X(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
class Y(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
class Z(models.Model):
    word = models.TextField()    
    def __str__(self):
      return self.word
  
  