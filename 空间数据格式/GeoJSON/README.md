# GeoJSON

GeoJSON是一种基于JavaScript对象标记（JSON）的地理空间数据交换格式。它定义了几种JSON对象以及它们组合来表示有关地理特征、其属性和空间范围的数据的方式。GeoJSON使用地理坐标参考系统，即1984年世界大地测量系统，以及小数度为单位。

GeoJSON是一种基于JSON的格式，用于表示各种地理数据结构。其基本结构包括几个关键组件：`FeatureCollection`、`Feature`和`Geometry`。以下是GeoJSON的基本结构和每个组件的简要说明：

## FeatureCollection 
`FeatureCollection`是GeoJSON的顶层结构，它是一组`Feature`的集合。

```json
{
  "type": "FeatureCollection",
  "features": [] // 这里放置Feature数组
}
```

## Feature
`Feature`代表一个地理空间中的对象。每个`Feature`都包含一个`Geometry`对象和一组相关的`properties`。

```json
{
  "type": "Feature",
  "geometry": {}, // Geometry对象
  "properties": {} // 与此Feature相关的属性集合
}
```

## Geometry
`Geometry`是实际地理形状的描述。它可以是以下类型之一：`Point`、`LineString`、`Polygon`、`MultiPoint`、`MultiLineString`、`MultiPolygon`和`GeometryCollection`。

- **Point**: 表示一个位置。
  ```json
  {
    "type": "Point",
    "coordinates": [30, 10] // [经度, 纬度]
  }
  ```

- **LineString**: 表示多个点的连线。
  ```json
  {
    "type": "LineString",
    "coordinates": [[30, 10], [10, 30], [40, 40]] // 点的数组
  }
  ```

- **Polygon**: 表示多边形区域。
  ```json
  {
    "type": "Polygon",
    "coordinates": [
      [[30, 10], [40, 40], [20, 40], [10, 20], [30, 10]] // 多边形的外环
      // 可以添加更多数组表示内环（洞）
    ]
  }
  ```

- **MultiPoint**：`MultiPoint`是一个点的集合，每个点都有自己的坐标。

  ```json
  {
      "type": "MultiPoint",
      "coordinates": [
        [100.0, 0.0], [101.0, 1.0] // 这里列出了多个点的坐标
      ]
  }
  ```

- **MultiLineString**：`MultiLineString`是多个`LineString`的集合，每个`LineString`是由多个点连接而成的路径。

  ```json
  {
      "type": "MultiLineString",
      "coordinates": [
        [[100.0, 0.0], [101.0, 1.0]], // 第一个LineString
        [[102.0, 2.0], [103.0, 3.0]]  // 第二个LineString
        // ...可以有更多LineStrings
      ]
  }
  ```

- **MultiPolygon**：`MultiPolygon`是多个`Polygon`的集合，每个`Polygon`可以有一个外环和多个内环（洞）。

  ```json
  {
      "type": "MultiPolygon",
      "coordinates": [
        [ // 第一个多边形
          [[102.0, 2.0],[103.0, 2.0],[103.0, 3.0],[102.0, 3.0],[102.0, 2.0]],//外环
          [[102.2, 2.2],[102.8, 2.2],[102.8, 2.8],[102.2, 2.8],[102.2, 2.2]]//内环（洞）
        ],
        [ // 第二个多边形
          [[100.0, 0.0],[101.0, 0.0],[101.0, 1.0],[100.0, 1.0],[100.0, 0.0]]// 外环
          // ...可以有内环
        ]
        // ...可以有更多多边形
      ]
  }
  ```

- **GeometryCollection**：`GeometryCollection`是不同类型几何体的集合。

  ```json
  {
      "type": "GeometryCollection",
      "geometries": [
        {
          "type": "Point",
          "coordinates": [100.0, 0.0]
        },
        {
          "type": "LineString",
          "coordinates": [[101.0, 0.0], [102.0, 1.0]]
        }
        // ...可以包含更多不同类型的几何体
      ]
  }
  ```

  

##  属性（Properties）
每个`Feature`都可以有一个`properties`对象，该对象包含与该`Feature`相关的任意信息。这些属性可以是名称、分类、描述或与该特征相关的任何其他数据。

```json
{
  "properties": {
    "name": "北京",
    "population": 21500000
    // ...其他属性
  }
}
```

# 完整示例
以下是一个包含单个点特征的简单GeoJSON对象的示例：

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [116.4, 39.9]
      },
      "properties": {
        "name": "北京",
        "population": 21500000
      }
    }
  ]
}
```

# 总结

在每种类型的GeoJSON结构中，`coordinates`数组的维度和组织方式是不同的，以适应不同的几何类型。属性（`properties`）可以为每个特征添加任何相关的额外信息。这些结构的灵活性使得GeoJSON成为表示各种复杂地理数据的强大工具。