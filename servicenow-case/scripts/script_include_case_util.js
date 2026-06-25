var CaseUtil = Class.create();
CaseUtil.prototype = {
    initialize: function() {},

    /**
     * 判断逻辑删除标记。
     * ServiceNow True/False 字段用 getValue() 取得时，通常是字符串 'true' 或 'false'。
     */
    isLogicalDeleted: function(caseGr, fieldName) {
        fieldName = fieldName || 'u_management_delete_flag';
        if (!caseGr || !caseGr.isValidRecord()) {
            return false;
        }
        return caseGr.getValue(fieldName) === 'true';
    },

    /**
     * yyyy-MM-dd 格式化。
     */
    formatDateToYmd: function(value) {
        if (gs.nil(value)) {
            return '';
        }

        try {
            var gdt = new GlideDateTime(value);
            return gdt.getDate().getByFormat('yyyy-MM-dd');
        } catch (e) {
            gs.warn('CaseUtil.formatDateToYmd failed. value=' + value + ', error=' + e.message);
            return '';
        }
    },

    /**
     * 构建 Case 简要信息。
     */
    buildCaseSummary: function(caseGr) {
        if (!caseGr || !caseGr.isValidRecord()) {
            return '';
        }

        return [
            caseGr.getDisplayValue('number'),
            caseGr.getDisplayValue('short_description'),
            caseGr.getDisplayValue('assigned_to')
        ].join(' / ');
    },

    type: 'CaseUtil'
};
