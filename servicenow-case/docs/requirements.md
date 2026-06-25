# ServiceNow Case 需求整理

## 1. 工程目的

本工程用于管理 ServiceNow Case 相关开发资料，适合以下场景：

- CSM Case 表单开发
- Case 字段校验
- Case 数据复制到 IF 表
- Case 操作手顺文档生成
- Case 开发教学资料整理

## 2. 初始功能范围

### 2.1 字段设计管理

使用 JSON 方式维护字段清单，包括：

- 字段名
- 字段标签
- 类型
- 是否必填
- 示例值
- 备注

### 2.2 必填校验 Business Rule

用于保存服务器端校验模板，例如：

- 顾客名为空时阻止保存
- 项目名为空时阻止保存
- Assigned to 为空时阻止保存

### 2.3 Client Script 示例

用于保存表单画面变化时的客户端脚本，例如：

- Category 变化时自动设置 Subcategory
- State 变化时提示用户
- Assignment group 变化时控制字段显示

### 2.4 Script Include 工具类

用于保存 Case 通用处理逻辑，例如：

- 判断 Case 是否需要同步
- 生成 Case 编号
- 统一格式化日期
- 判断逻辑删除标记

## 3. 后续扩展方向

### 3.1 自动生成开发手顺网站

未来可以把本工程扩展为一个静态网站：

- 输入需求
- 自动生成 ServiceNow 开发步骤
- 自动生成脚本模板
- 自动生成测试用例
- 部署到 Vercel

### 3.2 和 Chrome Extension 结合

未来可以和操作记录工具结合：

- 记录 ServiceNow 画面操作
- 自动生成 Markdown 手顺
- 自动生成 PPT
- 自动生成 YouTube 教程素材

## 4. 命名规则建议

| 类型 | 命名示例 |
|---|---|
| 工程目录 | `servicenow-case` |
| Business Rule | `Validate Case Mandatory Fields` |
| Client Script | `Case - OnChange Category` |
| Script Include | `CaseUtil` |
| 测试数据 | `case-fields.json` |
