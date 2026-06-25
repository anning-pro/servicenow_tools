/*
 * Client Script: Case - OnChange Category
 * Type: onChange
 * Field name: category
 * Purpose: Category 变化时自动提示或设置相关字段。
 */
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }

    if (newValue === 'inquiry') {
        g_form.showFieldMsg('category', 'Inquiry が選択されました。必要に応じて Subcategory を確認してください。', 'info');
    }

    if (newValue === 'complaint') {
        g_form.showFieldMsg('category', 'Complaint の場合、優先度と担当者を確認してください。', 'warning');
    }
}
