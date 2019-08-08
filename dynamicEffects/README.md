# Dynamic Effects

This repository provides the source code for the three Dynamic Effects in [Activating Chart Project](https://vizgroup.github.io/activateviz/)

- [Marching Ants](#marching-ants)

- [Geometric Deformation](#geometric-deformation)

- [Gradual Appearance](#gradual-appearance)

*How to Run the Exmaple*

 Open HTML files directly.

*File Structure*

	- lib: //3rd party library
	- src: //core code
	- examples: //examples to demonstrate the usage of API
		- marchingant.html //marching ants
		- gradualappearance.html //gradual appearance	
		- geometrydeformation.html //geometric deformation
	- API.md //API document
	

## Marching Ants

<img src="https://github.com/vizgroup/DataDrivenEffect/blob/master/rc/marchingant.png" height="150">


###### API

```
marchingAnt(Visual_proxy(Ant), Path, Boundary, Speed, Space [,Groupid, Color, byExample])
```

###### Example

./example/marchingant/

###### Parameters

- Visual_proxy: the ant shape defined by a point list (Visual_proxy also define the original position of ant marching),  e.g.,
	```
	Visual_proxy = [[100, 300], [300, 350], [100, 200]] // to define a triangular Ant. 
	```

- Path: the path that the ants march, defined by a point list (Path only define the direction of ant marching), e.g., 
	```
	Path = [[100, 100], [200, 200], ...] // where [x_i, y_i] is the i_th dot
	```
  
- Boundry: the shape bounds ants, defined by a point list, e.g., 
	```
	Boundary = [[100, 100], [300, 100], [300, 300], [100, 300] // to define a rectangular boundary
	```

- Speed: the speed that the ant marches, e.g., 
	```
	Speed = 20 //scaled in range[10, 30]; the bigger, the faster. 
	```

- Space: the gap between ants, e.g.,
	```
	Space = 10 //scaled in range[10, 30]; the bigger, the sparser.
	```

- Color: ant's color
	```
	Color = "#aabbcc"
	```
	
- Groupid: group identification of ants. If ants have the same Groupid, they will have uniformed ants' gap and speed.

- byExample: boolean, to indicate the example defined by users or not.


###### API

```
loadMA (fileName [, canvasId]) // constructs a new effect of Ant on the basis of the content in JSON file user defined.
```

###### Example

./example/circos.html

###### Parameters

- fileName: the JSON file which configures the information of ants, e.g., fileName = "circos.json":
    	
	```
    {
        "_id" : 1, 
        "name" : "circos", 
        "magroups" : {
            "orange" : {
                "mainfo" : {
                    "ae" : "MA",
                    "antcolor" : "#521225",
                    "antshape" : "self-defined",
                    "groupid" : "1",
                    "antgap" : 40,
                    "antinterval" : 5
                },
                "malist" : [ 
                    {
                        "path" : {
                            "geotype" : "polyline",
                            "dots" : [ 
                                [693,254], 
                                [670,263], 
                                [645,267], 
                                [626,270], 
                            ]
                        },
                        "ant" : {
                            "dots" : [ 
                                [717.721943014525,302.207587672443], 
                                [703.709071225713,294.883693610518], 
                                [684.058857780444,278.547564584479],
                            ]
                        },
                        "boundary" : {
                            "geotype" : "area",
                            "dots" : [ 
                                [677,218], 
                                [658,228], 
                                [634,244], 
                                [620,248], 
                            ]
                        }
                    }]
            }}
    }
	```
	
	where "name" represents the name of the effect, "magroups" holds multiple Marching Ants effects. Each one is indexed by a unique id (e.g., "1" here), and two decriptive information "mainfo" and "malist". "mainfo" stored the non-geometric information of the ant, such as color, groupid, gap. "malist" defines the geometry information, i.e., "path", "ant" and "boundary".


- canvasId: the canvas Id to render. If not defined, a 800x800 canvas will be created, e.g., 
	```
	canvasId = "aecanvas"
	```

## Geometric Deformation

<img src="https://github.com/vizgroup/DataDrivenEffect/blob/master/rc/geometrydeformation.png" height="150">


###### API

```
geometrydeformation (Visual_proxy, Focal, Bandwidth, Speed, Context)
```

###### Example

./example/geometrydeformation

###### Parameters

- Visual_Proxy: the element of which you want to add the effect of geometric deformation, e.g., 
	
	```
	Visual_Proxy = Circle(,Rect, Path)	//it can be the circle or rect element defined by using D3.js, and it can be a path element defined by users

    Circle = d3.select("svg")
                .append("circle")
                .attr("cx",50)
				.attr("cy",60)
				.attr("r",30)
	
	Rect = d3.select("svg")
	        .append("rect")
	        .attr("cx", 70)
	        .attr("cy", 80)
	        .attr("width", 60)
	        .attr("heitht". 60)
	 
	Path = svg.append("path")
        .attr("d", lineFunction(data2))
        .attr("stroke", "black")
	```

- Focal: the center of effect where you want to apply, defined by a point, e.g., 
	```
	Focal = [50, 50]//such as the figure source is the rect, the Focal([50, 50]) will be the centroid of the rect
    ```
         
- Bandwidth: the size that you want the figure source amplify, e.g., 
	```
	Bandwidth = 50//the radius of effect of fisheye will be 50px
	```
- Speed: the speed that the effect of geometric deformation changes, e.g., 
	```
	Speed = 20//scaled in range[10, 30]; the bigger, the faster. 
    ```     

## Gradual Appearance

<img src="https://github.com/vizgroup/DataDrivenEffect/blob/master/rc/gradualappearance.png" height="150">

###### API

```
gradualAppearance (Visual_Proxy, Offset, Repetition, Speed)
```

###### Example  

./example/gradualappearance

###### Parameters
- Visual_Proxy: the element of which you want to add the effect of gradual appearance, e.g.,

	```
	Visual_Proxy = circle	//it should be a SVG element, such as the circle elements drawn with D3

	(cirlce = d3.select("svg")
		.append("circle")
		.attr("cx",50)
		.attr("cy",60)
		.attr("r",30)
	)
	```

- Offset: the time the effect of gradual appearance appears, e.g., 
	```
	Offset = 3//the unit is seconds
	```

- Repetition: the number of times the effect of gradual appearance occurs, e.g.,
	``` 
	Repetition = 4//the effect of source will occurs four times
	```

- Speed: the speed that the effect of gradual appearance changes, e.g.,
	``` 
	Speed = 20//scaled in range[10, 30]; the bigger, the faster.   
	```
