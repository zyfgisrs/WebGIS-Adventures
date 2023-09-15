OGC（Open Geospatial Consortium）是一个国际非盈利组织，专门负责开发可用于地理信息系统（GIS）和其他地理信息科学领域的开放标准。OGC的目标是促进不同系统和平台之间的数据和服务的互操作性。以下是一些常用的OGC规范：

### 地图服务

1. **==WMS== (Web Map Service)** - 提供地理空间数据为地图图像（如PNG, JPEG等）的Web服务。
2. **WMTS (Web Map Tile Service)** - 提供预渲染或即时渲染的地图瓦片。

### 特征服务

1. **==WFS== (Web Feature Service)** - 提供关于地理空间数据特征（Features）的信息，通常以GML（Geography Markup Language）格式。
2. **WFS-T (Web Feature Service - Transactional)** - WFS的一个扩展，支持特征的创建、删除和更新。

### 覆盖（栅格数据）服务

1. **WCS (Web Coverage Service)** - 提供对地理空间数据“覆盖”（例如，气象数据、卫星图像等）的访问。

### 查询和过滤

1. **CQL (Common Query Language)** - 用于查询OGC服务（如WFS）的通用查询语言。
2. **Filter Encoding** - XML格式用于描述WFS和WMS请求中的过滤条件。

### 符号和样式

1. **SLD (Styled Layer Descriptor)** - 用于描述如何可视化WMS和WFS服务中的地理空间数据。
2. **SE (Symbol Encoding)** - 通常与SLD一起使用，描述特定的符号和样式。

### 其他规范和标准

1. **==KML== (Keyhole Markup Language)** - 用于描述和共享地理信息，通常用在Google Earth等应用中。
2. **GeoJSON** - 用于编码各种地理数据结构的JSON格式。
3. **==GML== (Geography Markup Language)** - 用于描述地理信息的XML格式。
4. **CSW (Catalog Service for the Web)** - 用于搜索和发现地理空间数据和服务