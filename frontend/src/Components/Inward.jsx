import React, { useState } from "react";
import { Input, Button, Table, Card, Modal, Form, Space } from "antd";
import "../App.css";
const Inward = () => {
    const [searchText, setSearchText] = useState("");
    const [data, setData] = useState([]); // No dummy data — starts empty
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editRecord, setEditRecord] = useState(null);

    const [form] = Form.useForm();

    // Table Columns
    const columns = [
        { title: "Item", dataIndex: "item" },
        { title: "Qty", dataIndex: "quantity" },
        { title: "Supplier", dataIndex: "supplier_name" },
        { title: "Invoice No", dataIndex: "supplier_invoice_no" },
        { title: "Invoice Date", dataIndex: "supplier_invoice_date" },
        { title: "PO No", dataIndex: "purchase_order_no" },
        { title: "Serial No", dataIndex: "serial_number" },
        { title: "Received By", dataIndex: "received_by" },
        { title: "Remarks", dataIndex: "remarks" },

        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space>
                    <Button type="primary" onClick={() => handleEdit(record)}>
                        Edit
                    </Button>
                    <Button danger onClick={() => handleDelete(record.key)}>
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];

    // Edit Handler
    const handleEdit = (record) => {
        setEditRecord(record);
        form.setFieldsValue(record);
        setIsModalOpen(true);
    };

    // Delete Handler
    const handleDelete = (key) => {
        setData((prev) => prev.filter((item) => item.key !== key));
    };

    // Add New Item
    const openAddModal = () => {
        setEditRecord(null);
        form.resetFields();
        setIsModalOpen(true);
    };

    // Save Handler
    const handleSave = async () => {
        try {
            const values = await form.validateFields();

            if (editRecord) {
                // Update
                setData((prev) =>
                    prev.map((item) =>
                        item.key === editRecord.key ? { ...item, ...values } : item
                    )
                );
            } else {
                // Create New
                setData((prev) => [
                    ...prev,
                    {
                        key: Date.now(),
                        ...values,
                    },
                ]);
            }

            setIsModalOpen(false);
            form.resetFields();
            setEditRecord(null);
        } catch (error) {
            console.error(error);
        }
    };

    // Filtered Search
    const filteredData = data.filter((item) =>
        Object.values(item).some((val) =>
            String(val).toLowerCase().includes(searchText.toLowerCase())
        )
    );

    return (
        <div className="inventory-container">
            {/* Page Header */}
            <div className="inventory-header">
                <h1 className="inventory-title">INWARD</h1>

                <div className="inventory-actions">
                    <Input
                        placeholder="Search Keyword"
                        style={{ maxWidth: 300 }}
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />

                    <Button type="primary" onClick={openAddModal}>
                        + Add Inward
                    </Button>
                </div>
            </div>

            {/* Table */}
            <Card className="inventory-card">
                <Table
                    columns={columns}
                    dataSource={filteredData}
                    pagination={false}
                    bordered
                />
            </Card>

            {/* Add/Edit Modal */}
            <Modal
                title={editRecord ? "Edit Inward" : "Add Inward"}
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={[
                    <Button key="cancel" onClick={() => setIsModalOpen(false)}>
                        Cancel
                    </Button>,
                    <Button key="save" type="primary" onClick={handleSave}>
                        Save
                    </Button>,
                ]}
            >
                <Form form={form} layout="vertical">
                    <div style={{ display: "flex", gap: "16px" }}>
                        <div style={{ flex: 1 }}>
                            <Form.Item name="item" label="Item" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>

                            <Form.Item name="quantity" label="Qty" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>

                            <Form.Item name="supplier_name" label="Supplier">
                                <Input />
                            </Form.Item>

                            <Form.Item name="supplier_invoice_no" label="Invoice No">
                                <Input />
                            </Form.Item>
                        </div>

                        <div style={{ flex: 1 }}>
                            <Form.Item name="supplier_invoice_date" label="Invoice Date">
                                <Input />
                            </Form.Item>

                            <Form.Item name="purchase_order_no" label="PO No">
                                <Input />
                            </Form.Item>

                            <Form.Item name="serial_number" label="Serial No">
                                <Input />
                            </Form.Item>

                            <Form.Item name="received_by" label="Received By">
                                <Input />
                            </Form.Item>

                            <Form.Item name="remarks" label="Remarks">
                                <Input.TextArea rows={3} />
                            </Form.Item>
                        </div>
                    </div>
                </Form>

            </Modal>
        </div>
    );
};

export default Inward;
