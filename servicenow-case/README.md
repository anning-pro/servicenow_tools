# ServiceNow Case 工程

这个工程用于整理和沉淀 ServiceNow Case / CSM Case 相关的开发手顺、脚本模板、字段设计和测试数据。

## 目标

- 快速创建 Case 相关开发模板
- 保存常用 Business Rule、Client Script、Script Include 示例
- 整理 Case 字段设计和测试数据
- 未来可扩展为自动生成 ServiceNow 开发手顺的网站或工具

## 目录结构

```text
servicenow-case/
├── README.md
├── docs/
│   └── requirements.md
├── examples/
│   └── case-fields.json
└── scripts/
    ├── business_rule_validate_case.js
    ├── client_script_case_on_change.js
    └── script_include_case_util.js
```

## 使用方式

1. 在 ServiceNow Studio 或系统定义画面中创建对应脚本。
2. 参考 `examples/case-fields.json` 维护字段设计。
3. 将 `scripts/` 下的模板复制到 ServiceNow，并根据实际表名、字段名调整。

## 默认表名

当前示例默认使用：

```text
sn_customerservice_case
```

如果你的环境使用自定义表，例如：

```text
sn_customerservice_case2
```

请统一替换脚本中的 `TABLE_NAME` 或查询表名。

## 下一步建议

- 增加 Case 自动创建脚本
- 增加 Excel 导入 Case 的转换模板
- 增加 Case 到 IF 表的批处理模板
- 增加 Vercel 网站页面，用来展示 ServiceNow Case 开发手顺
