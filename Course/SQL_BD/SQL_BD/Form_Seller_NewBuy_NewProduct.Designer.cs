namespace SQL_BD
{
    partial class Form_Seller_NewBuy_NewProduct
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form_Seller_NewBuy_NewProduct));
            this.bD_Shop_4semDataSet = new SQL_BD.BD_Shop_4semDataSet();
            this.seller_NewBuyBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.seller_NewBuyTableAdapter = new SQL_BD.BD_Shop_4semDataSetTableAdapters.Seller_NewBuyTableAdapter();
            this.tableAdapterManager = new SQL_BD.BD_Shop_4semDataSetTableAdapters.TableAdapterManager();
            this.buyTableAdapter = new SQL_BD.BD_Shop_4semDataSetTableAdapters.BuyTableAdapter();
            this.productTableAdapter = new SQL_BD.BD_Shop_4semDataSetTableAdapters.ProductTableAdapter();
            this.seller_NewBuyBindingNavigator = new System.Windows.Forms.BindingNavigator(this.components);
            this.bindingNavigatorAddNewItem = new System.Windows.Forms.ToolStripButton();
            this.bindingNavigatorCountItem = new System.Windows.Forms.ToolStripLabel();
            this.bindingNavigatorDeleteItem = new System.Windows.Forms.ToolStripButton();
            this.bindingNavigatorMoveFirstItem = new System.Windows.Forms.ToolStripButton();
            this.bindingNavigatorMovePreviousItem = new System.Windows.Forms.ToolStripButton();
            this.bindingNavigatorSeparator = new System.Windows.Forms.ToolStripSeparator();
            this.bindingNavigatorPositionItem = new System.Windows.Forms.ToolStripTextBox();
            this.bindingNavigatorSeparator1 = new System.Windows.Forms.ToolStripSeparator();
            this.bindingNavigatorMoveNextItem = new System.Windows.Forms.ToolStripButton();
            this.bindingNavigatorMoveLastItem = new System.Windows.Forms.ToolStripButton();
            this.bindingNavigatorSeparator2 = new System.Windows.Forms.ToolStripSeparator();
            this.seller_NewBuyBindingNavigatorSaveItem = new System.Windows.Forms.ToolStripButton();
            this.seller_NewBuyDataGridView = new System.Windows.Forms.DataGridView();
            this.dataGridViewTextBoxColumn1 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn2 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn3 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.comboBox1 = new System.Windows.Forms.ComboBox();
            this.productBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.textBox1 = new System.Windows.Forms.TextBox();
            this.textBox2 = new System.Windows.Forms.TextBox();
            this.buyBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.buy_ID_Bill_SearchBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.buy_ID_Bill_SearchTableAdapter = new SQL_BD.BD_Shop_4semDataSetTableAdapters.Buy_ID_Bill_SearchTableAdapter();
            this.button1 = new System.Windows.Forms.Button();
            this.buy_NewProductBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.product_availability_Search_IDBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.product_availability_Search_IDTableAdapter = new SQL_BD.BD_Shop_4semDataSetTableAdapters.Product_availability_Search_IDTableAdapter();
            this.buy_NewProductTableAdapter = new SQL_BD.BD_Shop_4semDataSetTableAdapters.Buy_NewProductTableAdapter();
            this.product_availability_Search_ProductBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.product_availability_Search_ProductTableAdapter = new SQL_BD.BD_Shop_4semDataSetTableAdapters.Product_availability_Search_ProductTableAdapter();
            this.product_availability_Search_ProductDataGridView = new System.Windows.Forms.DataGridView();
            this.dataGridViewTextBoxColumn9 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn10 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn11 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn12 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn13 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.button3 = new System.Windows.Forms.Button();
            this.button4 = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.bD_Shop_4semDataSet)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.seller_NewBuyBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.seller_NewBuyBindingNavigator)).BeginInit();
            this.seller_NewBuyBindingNavigator.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.seller_NewBuyDataGridView)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.productBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.buyBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.buy_ID_Bill_SearchBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.buy_NewProductBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.product_availability_Search_IDBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.product_availability_Search_ProductBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.product_availability_Search_ProductDataGridView)).BeginInit();
            this.SuspendLayout();
            // 
            // bD_Shop_4semDataSet
            // 
            this.bD_Shop_4semDataSet.DataSetName = "BD_Shop_4semDataSet";
            this.bD_Shop_4semDataSet.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // seller_NewBuyBindingSource
            // 
            this.seller_NewBuyBindingSource.DataMember = "Seller_NewBuy";
            this.seller_NewBuyBindingSource.DataSource = this.bD_Shop_4semDataSet;
            // 
            // seller_NewBuyTableAdapter
            // 
            this.seller_NewBuyTableAdapter.ClearBeforeFill = true;
            // 
            // tableAdapterManager
            // 
            this.tableAdapterManager.BackupDataSetBeforeUpdate = false;
            this.tableAdapterManager.BillTableAdapter = null;
            this.tableAdapterManager.BuyTableAdapter = this.buyTableAdapter;
            this.tableAdapterManager.CustomerTableAdapter = null;
            this.tableAdapterManager.Product_availabilityTableAdapter = null;
            this.tableAdapterManager.ProductTableAdapter = this.productTableAdapter;
            this.tableAdapterManager.SellerTableAdapter = null;
            this.tableAdapterManager.ShopTableAdapter = null;
            this.tableAdapterManager.UpdateOrder = SQL_BD.BD_Shop_4semDataSetTableAdapters.TableAdapterManager.UpdateOrderOption.InsertUpdateDelete;
            this.tableAdapterManager.UsersTableAdapter = null;
            // 
            // buyTableAdapter
            // 
            this.buyTableAdapter.ClearBeforeFill = true;
            // 
            // productTableAdapter
            // 
            this.productTableAdapter.ClearBeforeFill = true;
            // 
            // seller_NewBuyBindingNavigator
            // 
            this.seller_NewBuyBindingNavigator.AddNewItem = this.bindingNavigatorAddNewItem;
            this.seller_NewBuyBindingNavigator.BindingSource = this.seller_NewBuyBindingSource;
            this.seller_NewBuyBindingNavigator.CountItem = this.bindingNavigatorCountItem;
            this.seller_NewBuyBindingNavigator.DeleteItem = this.bindingNavigatorDeleteItem;
            this.seller_NewBuyBindingNavigator.ImageScalingSize = new System.Drawing.Size(32, 32);
            this.seller_NewBuyBindingNavigator.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.bindingNavigatorMoveFirstItem,
            this.bindingNavigatorMovePreviousItem,
            this.bindingNavigatorSeparator,
            this.bindingNavigatorPositionItem,
            this.bindingNavigatorCountItem,
            this.bindingNavigatorSeparator1,
            this.bindingNavigatorMoveNextItem,
            this.bindingNavigatorMoveLastItem,
            this.bindingNavigatorSeparator2,
            this.bindingNavigatorAddNewItem,
            this.bindingNavigatorDeleteItem,
            this.seller_NewBuyBindingNavigatorSaveItem});
            this.seller_NewBuyBindingNavigator.Location = new System.Drawing.Point(0, 0);
            this.seller_NewBuyBindingNavigator.MoveFirstItem = this.bindingNavigatorMoveFirstItem;
            this.seller_NewBuyBindingNavigator.MoveLastItem = this.bindingNavigatorMoveLastItem;
            this.seller_NewBuyBindingNavigator.MoveNextItem = this.bindingNavigatorMoveNextItem;
            this.seller_NewBuyBindingNavigator.MovePreviousItem = this.bindingNavigatorMovePreviousItem;
            this.seller_NewBuyBindingNavigator.Name = "seller_NewBuyBindingNavigator";
            this.seller_NewBuyBindingNavigator.PositionItem = this.bindingNavigatorPositionItem;
            this.seller_NewBuyBindingNavigator.Size = new System.Drawing.Size(801, 39);
            this.seller_NewBuyBindingNavigator.TabIndex = 0;
            this.seller_NewBuyBindingNavigator.Text = "bindingNavigator1";
            // 
            // bindingNavigatorAddNewItem
            // 
            this.bindingNavigatorAddNewItem.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.bindingNavigatorAddNewItem.Image = ((System.Drawing.Image)(resources.GetObject("bindingNavigatorAddNewItem.Image")));
            this.bindingNavigatorAddNewItem.Name = "bindingNavigatorAddNewItem";
            this.bindingNavigatorAddNewItem.RightToLeftAutoMirrorImage = true;
            this.bindingNavigatorAddNewItem.Size = new System.Drawing.Size(36, 36);
            this.bindingNavigatorAddNewItem.Text = "Добавить";
            // 
            // bindingNavigatorCountItem
            // 
            this.bindingNavigatorCountItem.Name = "bindingNavigatorCountItem";
            this.bindingNavigatorCountItem.Size = new System.Drawing.Size(55, 36);
            this.bindingNavigatorCountItem.Text = "для {0}";
            this.bindingNavigatorCountItem.ToolTipText = "Общее число элементов";
            // 
            // bindingNavigatorDeleteItem
            // 
            this.bindingNavigatorDeleteItem.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.bindingNavigatorDeleteItem.Image = ((System.Drawing.Image)(resources.GetObject("bindingNavigatorDeleteItem.Image")));
            this.bindingNavigatorDeleteItem.Name = "bindingNavigatorDeleteItem";
            this.bindingNavigatorDeleteItem.RightToLeftAutoMirrorImage = true;
            this.bindingNavigatorDeleteItem.Size = new System.Drawing.Size(36, 36);
            this.bindingNavigatorDeleteItem.Text = "Удалить";
            // 
            // bindingNavigatorMoveFirstItem
            // 
            this.bindingNavigatorMoveFirstItem.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.bindingNavigatorMoveFirstItem.Image = ((System.Drawing.Image)(resources.GetObject("bindingNavigatorMoveFirstItem.Image")));
            this.bindingNavigatorMoveFirstItem.Name = "bindingNavigatorMoveFirstItem";
            this.bindingNavigatorMoveFirstItem.RightToLeftAutoMirrorImage = true;
            this.bindingNavigatorMoveFirstItem.Size = new System.Drawing.Size(36, 36);
            this.bindingNavigatorMoveFirstItem.Text = "Переместить в начало";
            // 
            // bindingNavigatorMovePreviousItem
            // 
            this.bindingNavigatorMovePreviousItem.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.bindingNavigatorMovePreviousItem.Image = ((System.Drawing.Image)(resources.GetObject("bindingNavigatorMovePreviousItem.Image")));
            this.bindingNavigatorMovePreviousItem.Name = "bindingNavigatorMovePreviousItem";
            this.bindingNavigatorMovePreviousItem.RightToLeftAutoMirrorImage = true;
            this.bindingNavigatorMovePreviousItem.Size = new System.Drawing.Size(36, 36);
            this.bindingNavigatorMovePreviousItem.Text = "Переместить назад";
            // 
            // bindingNavigatorSeparator
            // 
            this.bindingNavigatorSeparator.Name = "bindingNavigatorSeparator";
            this.bindingNavigatorSeparator.Size = new System.Drawing.Size(6, 39);
            // 
            // bindingNavigatorPositionItem
            // 
            this.bindingNavigatorPositionItem.AccessibleName = "Положение";
            this.bindingNavigatorPositionItem.AutoSize = false;
            this.bindingNavigatorPositionItem.Name = "bindingNavigatorPositionItem";
            this.bindingNavigatorPositionItem.Size = new System.Drawing.Size(35, 27);
            this.bindingNavigatorPositionItem.Text = "0";
            this.bindingNavigatorPositionItem.ToolTipText = "Текущее положение";
            // 
            // bindingNavigatorSeparator1
            // 
            this.bindingNavigatorSeparator1.Name = "bindingNavigatorSeparator1";
            this.bindingNavigatorSeparator1.Size = new System.Drawing.Size(6, 39);
            // 
            // bindingNavigatorMoveNextItem
            // 
            this.bindingNavigatorMoveNextItem.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.bindingNavigatorMoveNextItem.Image = ((System.Drawing.Image)(resources.GetObject("bindingNavigatorMoveNextItem.Image")));
            this.bindingNavigatorMoveNextItem.Name = "bindingNavigatorMoveNextItem";
            this.bindingNavigatorMoveNextItem.RightToLeftAutoMirrorImage = true;
            this.bindingNavigatorMoveNextItem.Size = new System.Drawing.Size(36, 36);
            this.bindingNavigatorMoveNextItem.Text = "Переместить вперед";
            // 
            // bindingNavigatorMoveLastItem
            // 
            this.bindingNavigatorMoveLastItem.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.bindingNavigatorMoveLastItem.Image = ((System.Drawing.Image)(resources.GetObject("bindingNavigatorMoveLastItem.Image")));
            this.bindingNavigatorMoveLastItem.Name = "bindingNavigatorMoveLastItem";
            this.bindingNavigatorMoveLastItem.RightToLeftAutoMirrorImage = true;
            this.bindingNavigatorMoveLastItem.Size = new System.Drawing.Size(36, 36);
            this.bindingNavigatorMoveLastItem.Text = "Переместить в конец";
            // 
            // bindingNavigatorSeparator2
            // 
            this.bindingNavigatorSeparator2.Name = "bindingNavigatorSeparator2";
            this.bindingNavigatorSeparator2.Size = new System.Drawing.Size(6, 39);
            // 
            // seller_NewBuyBindingNavigatorSaveItem
            // 
            this.seller_NewBuyBindingNavigatorSaveItem.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.seller_NewBuyBindingNavigatorSaveItem.Enabled = false;
            this.seller_NewBuyBindingNavigatorSaveItem.Image = ((System.Drawing.Image)(resources.GetObject("seller_NewBuyBindingNavigatorSaveItem.Image")));
            this.seller_NewBuyBindingNavigatorSaveItem.Name = "seller_NewBuyBindingNavigatorSaveItem";
            this.seller_NewBuyBindingNavigatorSaveItem.Size = new System.Drawing.Size(36, 36);
            this.seller_NewBuyBindingNavigatorSaveItem.Text = "Сохранить данные";
            // 
            // seller_NewBuyDataGridView
            // 
            this.seller_NewBuyDataGridView.AutoGenerateColumns = false;
            this.seller_NewBuyDataGridView.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.seller_NewBuyDataGridView.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.dataGridViewTextBoxColumn1,
            this.dataGridViewTextBoxColumn2,
            this.dataGridViewTextBoxColumn3});
            this.seller_NewBuyDataGridView.DataSource = this.seller_NewBuyBindingSource;
            this.seller_NewBuyDataGridView.Location = new System.Drawing.Point(411, 67);
            this.seller_NewBuyDataGridView.Margin = new System.Windows.Forms.Padding(2);
            this.seller_NewBuyDataGridView.Name = "seller_NewBuyDataGridView";
            this.seller_NewBuyDataGridView.RowHeadersWidth = 82;
            this.seller_NewBuyDataGridView.RowTemplate.Height = 33;
            this.seller_NewBuyDataGridView.Size = new System.Drawing.Size(381, 180);
            this.seller_NewBuyDataGridView.TabIndex = 1;
            // 
            // dataGridViewTextBoxColumn1
            // 
            this.dataGridViewTextBoxColumn1.DataPropertyName = "ID_Bill";
            this.dataGridViewTextBoxColumn1.HeaderText = "ID_Bill";
            this.dataGridViewTextBoxColumn1.MinimumWidth = 10;
            this.dataGridViewTextBoxColumn1.Name = "dataGridViewTextBoxColumn1";
            this.dataGridViewTextBoxColumn1.Visible = false;
            this.dataGridViewTextBoxColumn1.Width = 200;
            // 
            // dataGridViewTextBoxColumn2
            // 
            this.dataGridViewTextBoxColumn2.DataPropertyName = "Product_Name";
            this.dataGridViewTextBoxColumn2.HeaderText = "Товар";
            this.dataGridViewTextBoxColumn2.MinimumWidth = 10;
            this.dataGridViewTextBoxColumn2.Name = "dataGridViewTextBoxColumn2";
            this.dataGridViewTextBoxColumn2.Width = 140;
            // 
            // dataGridViewTextBoxColumn3
            // 
            this.dataGridViewTextBoxColumn3.DataPropertyName = "Count";
            this.dataGridViewTextBoxColumn3.HeaderText = "Количество";
            this.dataGridViewTextBoxColumn3.MinimumWidth = 10;
            this.dataGridViewTextBoxColumn3.Name = "dataGridViewTextBoxColumn3";
            this.dataGridViewTextBoxColumn3.Width = 120;
            // 
            // comboBox1
            // 
            this.comboBox1.DataSource = this.productBindingSource;
            this.comboBox1.DisplayMember = "Product_Name";
            this.comboBox1.FormattingEnabled = true;
            this.comboBox1.Location = new System.Drawing.Point(527, 259);
            this.comboBox1.Margin = new System.Windows.Forms.Padding(2);
            this.comboBox1.Name = "comboBox1";
            this.comboBox1.Size = new System.Drawing.Size(265, 24);
            this.comboBox1.TabIndex = 2;
            // 
            // productBindingSource
            // 
            this.productBindingSource.DataMember = "Product";
            this.productBindingSource.DataSource = this.bD_Shop_4semDataSet;
            // 
            // textBox1
            // 
            this.textBox1.DataBindings.Add(new System.Windows.Forms.Binding("Text", this.productBindingSource, "ID", true));
            this.textBox1.Location = new System.Drawing.Point(578, 133);
            this.textBox1.Margin = new System.Windows.Forms.Padding(2);
            this.textBox1.Name = "textBox1";
            this.textBox1.Size = new System.Drawing.Size(68, 22);
            this.textBox1.TabIndex = 3;
            // 
            // textBox2
            // 
            this.textBox2.DataBindings.Add(new System.Windows.Forms.Binding("Text", this.buyBindingSource, "Count", true));
            this.textBox2.Location = new System.Drawing.Point(527, 297);
            this.textBox2.Margin = new System.Windows.Forms.Padding(2);
            this.textBox2.Name = "textBox2";
            this.textBox2.Size = new System.Drawing.Size(265, 22);
            this.textBox2.TabIndex = 4;
            // 
            // buyBindingSource
            // 
            this.buyBindingSource.DataMember = "Buy";
            this.buyBindingSource.DataSource = this.bD_Shop_4semDataSet;
            // 
            // buy_ID_Bill_SearchBindingSource
            // 
            this.buy_ID_Bill_SearchBindingSource.DataMember = "Buy_ID_Bill_Search";
            this.buy_ID_Bill_SearchBindingSource.DataSource = this.bD_Shop_4semDataSet;
            // 
            // buy_ID_Bill_SearchTableAdapter
            // 
            this.buy_ID_Bill_SearchTableAdapter.ClearBeforeFill = true;
            // 
            // button1
            // 
            this.button1.Font = new System.Drawing.Font("Microsoft Sans Serif", 16F);
            this.button1.Location = new System.Drawing.Point(411, 323);
            this.button1.Margin = new System.Windows.Forms.Padding(2);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(383, 52);
            this.button1.TabIndex = 7;
            this.button1.Text = "Добавить товар в корзину";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // buy_NewProductBindingSource
            // 
            this.buy_NewProductBindingSource.DataMember = "Buy_NewProduct";
            this.buy_NewProductBindingSource.DataSource = this.bD_Shop_4semDataSet;
            // 
            // product_availability_Search_IDBindingSource
            // 
            this.product_availability_Search_IDBindingSource.DataMember = "Product_availability_Search_ID";
            this.product_availability_Search_IDBindingSource.DataSource = this.bD_Shop_4semDataSet;
            // 
            // product_availability_Search_IDTableAdapter
            // 
            this.product_availability_Search_IDTableAdapter.ClearBeforeFill = true;
            // 
            // buy_NewProductTableAdapter
            // 
            this.buy_NewProductTableAdapter.ClearBeforeFill = true;
            // 
            // product_availability_Search_ProductBindingSource
            // 
            this.product_availability_Search_ProductBindingSource.DataMember = "Product_availability_Search_Product";
            this.product_availability_Search_ProductBindingSource.DataSource = this.bD_Shop_4semDataSet;
            // 
            // product_availability_Search_ProductTableAdapter
            // 
            this.product_availability_Search_ProductTableAdapter.ClearBeforeFill = true;
            // 
            // product_availability_Search_ProductDataGridView
            // 
            this.product_availability_Search_ProductDataGridView.AutoGenerateColumns = false;
            this.product_availability_Search_ProductDataGridView.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.product_availability_Search_ProductDataGridView.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.dataGridViewTextBoxColumn9,
            this.dataGridViewTextBoxColumn10,
            this.dataGridViewTextBoxColumn11,
            this.dataGridViewTextBoxColumn12,
            this.dataGridViewTextBoxColumn13});
            this.product_availability_Search_ProductDataGridView.DataSource = this.product_availability_Search_ProductBindingSource;
            this.product_availability_Search_ProductDataGridView.Location = new System.Drawing.Point(8, 67);
            this.product_availability_Search_ProductDataGridView.Margin = new System.Windows.Forms.Padding(2);
            this.product_availability_Search_ProductDataGridView.Name = "product_availability_Search_ProductDataGridView";
            this.product_availability_Search_ProductDataGridView.RowHeadersWidth = 82;
            this.product_availability_Search_ProductDataGridView.RowTemplate.Height = 33;
            this.product_availability_Search_ProductDataGridView.Size = new System.Drawing.Size(381, 251);
            this.product_availability_Search_ProductDataGridView.TabIndex = 9;
            // 
            // dataGridViewTextBoxColumn9
            // 
            this.dataGridViewTextBoxColumn9.DataPropertyName = "Product_Name";
            this.dataGridViewTextBoxColumn9.HeaderText = "Товар";
            this.dataGridViewTextBoxColumn9.MinimumWidth = 10;
            this.dataGridViewTextBoxColumn9.Name = "dataGridViewTextBoxColumn9";
            this.dataGridViewTextBoxColumn9.Width = 140;
            // 
            // dataGridViewTextBoxColumn10
            // 
            this.dataGridViewTextBoxColumn10.DataPropertyName = "Count";
            this.dataGridViewTextBoxColumn10.HeaderText = "Количество";
            this.dataGridViewTextBoxColumn10.MinimumWidth = 10;
            this.dataGridViewTextBoxColumn10.Name = "dataGridViewTextBoxColumn10";
            this.dataGridViewTextBoxColumn10.Width = 120;
            // 
            // dataGridViewTextBoxColumn11
            // 
            this.dataGridViewTextBoxColumn11.DataPropertyName = "ID_Product";
            this.dataGridViewTextBoxColumn11.HeaderText = "ID_Product";
            this.dataGridViewTextBoxColumn11.MinimumWidth = 10;
            this.dataGridViewTextBoxColumn11.Name = "dataGridViewTextBoxColumn11";
            this.dataGridViewTextBoxColumn11.Visible = false;
            this.dataGridViewTextBoxColumn11.Width = 200;
            // 
            // dataGridViewTextBoxColumn12
            // 
            this.dataGridViewTextBoxColumn12.DataPropertyName = "ID_PA";
            this.dataGridViewTextBoxColumn12.HeaderText = "ID_PA";
            this.dataGridViewTextBoxColumn12.MinimumWidth = 10;
            this.dataGridViewTextBoxColumn12.Name = "dataGridViewTextBoxColumn12";
            this.dataGridViewTextBoxColumn12.Visible = false;
            this.dataGridViewTextBoxColumn12.Width = 200;
            // 
            // dataGridViewTextBoxColumn13
            // 
            this.dataGridViewTextBoxColumn13.DataPropertyName = "ID_Bill";
            this.dataGridViewTextBoxColumn13.HeaderText = "ID_Bill";
            this.dataGridViewTextBoxColumn13.MinimumWidth = 10;
            this.dataGridViewTextBoxColumn13.Name = "dataGridViewTextBoxColumn13";
            this.dataGridViewTextBoxColumn13.Visible = false;
            this.dataGridViewTextBoxColumn13.Width = 200;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.BackColor = System.Drawing.Color.Transparent;
            this.label1.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F);
            this.label1.Location = new System.Drawing.Point(407, 45);
            this.label1.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(79, 20);
            this.label1.TabIndex = 10;
            this.label1.Text = "Корзина";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.BackColor = System.Drawing.Color.Transparent;
            this.label2.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F);
            this.label2.Location = new System.Drawing.Point(4, 45);
            this.label2.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(238, 20);
            this.label2.TabIndex = 11;
            this.label2.Text = "Список доступных товаров";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.BackColor = System.Drawing.Color.Transparent;
            this.label3.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F);
            this.label3.Location = new System.Drawing.Point(407, 259);
            this.label3.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(64, 20);
            this.label3.TabIndex = 12;
            this.label3.Text = "Товар:";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.BackColor = System.Drawing.Color.Transparent;
            this.label4.Font = new System.Drawing.Font("Microsoft Sans Serif", 10F);
            this.label4.Location = new System.Drawing.Point(407, 299);
            this.label4.Margin = new System.Windows.Forms.Padding(2, 0, 2, 0);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(114, 20);
            this.label4.TabIndex = 13;
            this.label4.Text = "Количество:";
            // 
            // button3
            // 
            this.button3.Location = new System.Drawing.Point(11, 394);
            this.button3.Margin = new System.Windows.Forms.Padding(2);
            this.button3.Name = "button3";
            this.button3.Size = new System.Drawing.Size(100, 31);
            this.button3.TabIndex = 15;
            this.button3.Text = "Выход";
            this.button3.UseVisualStyleBackColor = true;
            this.button3.Click += new System.EventHandler(this.button3_Click);
            // 
            // button4
            // 
            this.button4.Font = new System.Drawing.Font("Microsoft Sans Serif", 20F);
            this.button4.Location = new System.Drawing.Point(11, 322);
            this.button4.Margin = new System.Windows.Forms.Padding(2);
            this.button4.Name = "button4";
            this.button4.Size = new System.Drawing.Size(381, 52);
            this.button4.TabIndex = 16;
            this.button4.Text = "Завершить покупку";
            this.button4.UseVisualStyleBackColor = true;
            this.button4.Click += new System.EventHandler(this.button4_Click);
            // 
            // Form_Seller_NewBuy_NewProduct
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.SystemColors.Control;
            this.BackgroundImage = ((System.Drawing.Image)(resources.GetObject("$this.BackgroundImage")));
            this.ClientSize = new System.Drawing.Size(801, 436);
            this.Controls.Add(this.button4);
            this.Controls.Add(this.button3);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.product_availability_Search_ProductDataGridView);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.textBox2);
            this.Controls.Add(this.comboBox1);
            this.Controls.Add(this.seller_NewBuyDataGridView);
            this.Controls.Add(this.seller_NewBuyBindingNavigator);
            this.Controls.Add(this.textBox1);
            this.Margin = new System.Windows.Forms.Padding(2);
            this.Name = "Form_Seller_NewBuy_NewProduct";
            this.Text = "Добавление товара в заказ";
            this.Load += new System.EventHandler(this.Form_Seller_NewBuy_NewProduct_Load);
            ((System.ComponentModel.ISupportInitialize)(this.bD_Shop_4semDataSet)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.seller_NewBuyBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.seller_NewBuyBindingNavigator)).EndInit();
            this.seller_NewBuyBindingNavigator.ResumeLayout(false);
            this.seller_NewBuyBindingNavigator.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.seller_NewBuyDataGridView)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.productBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.buyBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.buy_ID_Bill_SearchBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.buy_NewProductBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.product_availability_Search_IDBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.product_availability_Search_ProductBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.product_availability_Search_ProductDataGridView)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private BD_Shop_4semDataSet bD_Shop_4semDataSet;
        private System.Windows.Forms.BindingSource seller_NewBuyBindingSource;
        private BD_Shop_4semDataSetTableAdapters.Seller_NewBuyTableAdapter seller_NewBuyTableAdapter;
        private BD_Shop_4semDataSetTableAdapters.TableAdapterManager tableAdapterManager;
        private System.Windows.Forms.BindingNavigator seller_NewBuyBindingNavigator;
        private System.Windows.Forms.ToolStripButton bindingNavigatorAddNewItem;
        private System.Windows.Forms.ToolStripLabel bindingNavigatorCountItem;
        private System.Windows.Forms.ToolStripButton bindingNavigatorDeleteItem;
        private System.Windows.Forms.ToolStripButton bindingNavigatorMoveFirstItem;
        private System.Windows.Forms.ToolStripButton bindingNavigatorMovePreviousItem;
        private System.Windows.Forms.ToolStripSeparator bindingNavigatorSeparator;
        private System.Windows.Forms.ToolStripTextBox bindingNavigatorPositionItem;
        private System.Windows.Forms.ToolStripSeparator bindingNavigatorSeparator1;
        private System.Windows.Forms.ToolStripButton bindingNavigatorMoveNextItem;
        private System.Windows.Forms.ToolStripButton bindingNavigatorMoveLastItem;
        private System.Windows.Forms.ToolStripSeparator bindingNavigatorSeparator2;
        private System.Windows.Forms.ToolStripButton seller_NewBuyBindingNavigatorSaveItem;
        private BD_Shop_4semDataSetTableAdapters.BuyTableAdapter buyTableAdapter;
        private System.Windows.Forms.DataGridView seller_NewBuyDataGridView;
        private System.Windows.Forms.ComboBox comboBox1;
        private System.Windows.Forms.TextBox textBox1;
        private System.Windows.Forms.TextBox textBox2;
        private System.Windows.Forms.BindingSource buyBindingSource;
        private BD_Shop_4semDataSetTableAdapters.ProductTableAdapter productTableAdapter;
        private System.Windows.Forms.BindingSource productBindingSource;
        private System.Windows.Forms.BindingSource buy_ID_Bill_SearchBindingSource;
        private BD_Shop_4semDataSetTableAdapters.Buy_ID_Bill_SearchTableAdapter buy_ID_Bill_SearchTableAdapter;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.BindingSource buy_NewProductBindingSource;
        private System.Windows.Forms.BindingSource product_availability_Search_IDBindingSource;
        private BD_Shop_4semDataSetTableAdapters.Product_availability_Search_IDTableAdapter product_availability_Search_IDTableAdapter;
        private BD_Shop_4semDataSetTableAdapters.Buy_NewProductTableAdapter buy_NewProductTableAdapter;
        private System.Windows.Forms.BindingSource product_availability_Search_ProductBindingSource;
        private BD_Shop_4semDataSetTableAdapters.Product_availability_Search_ProductTableAdapter product_availability_Search_ProductTableAdapter;
        private System.Windows.Forms.DataGridView product_availability_Search_ProductDataGridView;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Button button3;
        private System.Windows.Forms.Button button4;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn1;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn2;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn3;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn9;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn10;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn11;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn12;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn13;
    }
}