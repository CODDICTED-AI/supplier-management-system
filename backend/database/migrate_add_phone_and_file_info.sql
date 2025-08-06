-- 数据库迁移脚本：添加联系人电话和文件信息字段
-- 适用于现有Supabase数据库

-- 添加联系人电话字段（如果不存在）
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='suppliers' AND column_name='contact_phone') THEN
        ALTER TABLE suppliers ADD COLUMN contact_phone VARCHAR(20);
        RAISE NOTICE '已添加 contact_phone 字段';
    ELSE
        RAISE NOTICE 'contact_phone 字段已存在，跳过';
    END IF;
END $$;

-- 添加文件信息字段（如果不存在）
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='suppliers' AND column_name='contract_file_original_name') THEN
        ALTER TABLE suppliers ADD COLUMN contract_file_original_name VARCHAR(255);
        RAISE NOTICE '已添加 contract_file_original_name 字段';
    ELSE
        RAISE NOTICE 'contract_file_original_name 字段已存在，跳过';
    END IF;
END $$;

DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='suppliers' AND column_name='contract_file_size') THEN
        ALTER TABLE suppliers ADD COLUMN contract_file_size INTEGER;
        RAISE NOTICE '已添加 contract_file_size 字段';
    ELSE
        RAISE NOTICE 'contract_file_size 字段已存在，跳过';
    END IF;
END $$;

DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='suppliers' AND column_name='contract_file_upload_time') THEN
        ALTER TABLE suppliers ADD COLUMN contract_file_upload_time TIMESTAMP;
        RAISE NOTICE '已添加 contract_file_upload_time 字段';
    ELSE
        RAISE NOTICE 'contract_file_upload_time 字段已存在，跳过';
    END IF;
END $$;

-- 验证表结构
SELECT 
    column_name, 
    data_type, 
    character_maximum_length,
    is_nullable
FROM information_schema.columns 
WHERE table_name = 'suppliers' 
ORDER BY ordinal_position;