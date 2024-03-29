
import tornado.web
from tornado.options import options

import pymongo
from pymongo import MongoClient

import networkx as nx

import setting



from bson import BSON
from bson import json_util


from PIL import Image
import io
import os.path

import json

import subprocess

class IndexHandler(tornado.web.RequestHandler):
	def get(self):
		self.render("./example/marchingant/circos.html")

class MAMindmapHandler(tornado.web.RequestHandler):
	def get(self):
		self.render("./example/marchingant/mindmap.html")

class MAMinardHandler(tornado.web.RequestHandler):
	def get(self):
		self.render("./example/marchingant/minard1858world2.html")

class MAPlayfairHandler(tornado.web.RequestHandler):
	def get(self):
		self.render("./example/marchingant/Playfair1821Pric.html")

class MABoxplotHandler(tornado.web.RequestHandler):
	def get(self):
		self.render("./example/marchingant/boxplot.html")

class  GACirclepackingHandler(tornado.web.RequestHandler):
	def get(self):
		self.render("./example/gradualappearance/circlepacking.html")

class  GATreemapHandler(tornado.web.RequestHandler):
	def get(self):
		self.render("./example/gradualappearance/treemap.html")

class GDRectHandler(tornado.web.RequestHandler):
	def get(self):
		self.render("./example/geometrydeformation/rectgd.html")

class GDScatterplotHandler(tornado.web.RequestHandler):
	def get(self):
		self.render("./example/geometrydeformation/scatterplotgd.html")

class GDPathHandler(tornado.web.RequestHandler):
	def get(self):
		self.render("./example/geometrydeformation/gddemo.html")

class MADemoHandler(tornado.web.RequestHandler):
	def get(self):
		self.render("./example/marchingant/demo.html")

class GADemoHandler(tornado.web.RequestHandler):
	def get(self):
		self.render("./example/gradualappearance/gademo2.html")

class InfographicHandler(tornado.web.RequestHandler):
	def get(self):
		self.render("./example/marchingant/addtoInfographic.html")










