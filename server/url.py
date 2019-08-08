#!/usr/bin/env python
#coding:utf-8

import sys
# from imp import reload
# reload(sys)
# sys.setdefaultencoding('utf-8')

from handler.pointhandler import IndexHandler
from handler.pointhandler import MAMindmapHandler
from handler.pointhandler import MAMinardHandler
from handler.pointhandler import MAPlayfairHandler
from handler.pointhandler import MABoxplotHandler
from handler.pointhandler import GACirclepackingHandler
from handler.pointhandler import GATreemapHandler
from handler.pointhandler import GDRectHandler
from handler.pointhandler import GDScatterplotHandler
from handler.pointhandler import GDPathHandler
from handler.pointhandler import MADemoHandler
from handler.pointhandler import GADemoHandler

from handler.pointhandler import InfographicHandler

url=[
	(r'/', IndexHandler),
    (r'/MAMindmap', MAMindmapHandler),
    (r'/MAMinard', MAMinardHandler),
    (r'/MAFair', MAPlayfairHandler),
    (r'/MABoxplot', MABoxplotHandler),
    (r'/GACirclepacking', GACirclepackingHandler),
    (r'/GATreemap', GATreemapHandler),
    (r'/GDRect', GDRectHandler),
    (r'/GDScatterplot', GDScatterplotHandler),
    (r'/GDPath', GDPathHandler),
    (r'/MADemo', MADemoHandler),
    (r'/GADemo', GADemoHandler),
    (r'/Infographic', InfographicHandler),
]