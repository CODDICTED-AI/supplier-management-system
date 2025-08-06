-- ================================================
-- 农福尚汇供应商管理系统 - 完整数据库迁移脚本
-- 适用于 Supabase PostgreSQL
-- ================================================

-- 第一步：添加新字段（如果不存在）
-- ================================================

-- 添加联系人电话字段
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='suppliers' AND column_name='contact_phone') THEN
        ALTER TABLE suppliers ADD COLUMN contact_phone VARCHAR(20);
        RAISE NOTICE '✅ 已添加 contact_phone 字段';
    ELSE
        RAISE NOTICE '⚠️ contact_phone 字段已存在，跳过';
    END IF;
END $$;

-- 添加合同文件原始名称字段
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='suppliers' AND column_name='contract_file_original_name') THEN
        ALTER TABLE suppliers ADD COLUMN contract_file_original_name VARCHAR(255);
        RAISE NOTICE '✅ 已添加 contract_file_original_name 字段';
    ELSE
        RAISE NOTICE '⚠️ contract_file_original_name 字段已存在，跳过';
    END IF;
END $$;

-- 添加合同文件大小字段
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='suppliers' AND column_name='contract_file_size') THEN
        ALTER TABLE suppliers ADD COLUMN contract_file_size INTEGER;
        RAISE NOTICE '✅ 已添加 contract_file_size 字段';
    ELSE
        RAISE NOTICE '⚠️ contract_file_size 字段已存在，跳过';
    END IF;
END $$;

-- 添加合同文件上传时间字段
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='suppliers' AND column_name='contract_file_upload_time') THEN
        ALTER TABLE suppliers ADD COLUMN contract_file_upload_time TIMESTAMP;
        RAISE NOTICE '✅ 已添加 contract_file_upload_time 字段';
    ELSE
        RAISE NOTICE '⚠️ contract_file_upload_time 字段已存在，跳过';
    END IF;
END $$;

-- 第二步：更新现有数据
-- ================================================

-- 为已有的文件路径设置默认的文件信息
UPDATE suppliers 
SET 
    contract_file_original_name = CASE 
        WHEN contract_file_path IS NOT NULL THEN 
            CASE 
                WHEN contract_file_path LIKE '%/%' THEN 
                    split_part(contract_file_path, '/', array_length(string_to_array(contract_file_path, '/'), 1))
                ELSE contract_file_path 
            END
        ELSE NULL 
    END,
    contract_file_upload_time = CASE 
        WHEN contract_file_path IS NOT NULL THEN created_at
        ELSE NULL 
    END
WHERE contract_file_path IS NOT NULL 
  AND (contract_file_original_name IS NULL OR contract_file_upload_time IS NULL);

-- 第三步：添加字段注释
-- ================================================

COMMENT ON COLUMN suppliers.contact_phone IS '联系人电话';
COMMENT ON COLUMN suppliers.contract_file_original_name IS '合同文件原始名称';
COMMENT ON COLUMN suppliers.contract_file_size IS '合同文件大小(字节)';
COMMENT ON COLUMN suppliers.contract_file_upload_time IS '文件上传时间';

-- 第四步：验证迁移结果
-- ================================================

-- 验证表结构
SELECT 
    column_name AS "字段名", 
    data_type AS "数据类型", 
    character_maximum_length AS "最大长度",
    is_nullable AS "允许空值",
    column_default AS "默认值"
FROM information_schema.columns 
WHERE table_name = 'suppliers' 
ORDER BY ordinal_position;

-- 检查现有数据（仅显示有文件的记录）
SELECT 
    id AS "ID",
    company_name AS "公司名称",
    contact_person AS "联系人",
    contact_phone AS "联系电话",
    contract_file_path AS "文件路径",
    contract_file_original_name AS "原始文件名",
    contract_file_size AS "文件大小",
    contract_file_upload_time AS "上传时间"
FROM suppliers 
WHERE contract_file_path IS NOT NULL
ORDER BY id
LIMIT 10;

-- 显示统计信息
SELECT 
    COUNT(*) AS "供应商总数",
    COUNT(contact_phone) AS "有电话的供应商",
    COUNT(contract_file_path) AS "有合同文件的供应商",
    COUNT(contract_file_original_name) AS "有文件名的供应商"
FROM suppliers;

-- ================================================
-- 迁移完成！
-- ================================================

RAISE NOTICE '🎉 数据库迁移完成！';
RAISE NOTICE '📊 请检查上方的验证结果';
RAISE NOTICE '🔧 如有问题，请检查后端代码和文件上传配置';