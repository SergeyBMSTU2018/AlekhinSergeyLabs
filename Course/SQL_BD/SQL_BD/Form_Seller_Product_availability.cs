using System;
using System.Windows.Forms;

namespace SQL_BD
{
    public partial class Form_Seller_Product_availability : Form
    {
        public Form_Seller_Product_availability()
        {
            InitializeComponent();
        }

        private void shopBindingNavigatorSaveItem_Click(object sender, EventArgs e)
        {
            this.Validate();
            this.shopBindingSource.EndEdit();
            this.tableAdapterManager.UpdateAll(this.bD_Shop_4semDataSet);
        }

        private void Form_Seller_Product_availability_Load(object sender, EventArgs e)
        {
            // TODO: данная строка кода позволяет загрузить данные в таблицу "bD_Shop_4semDataSet.Product_availability_Shop_View". При необходимости она может быть перемещена или удалена.
            this.product_availability_Shop_ViewTableAdapter.Fill(this.bD_Shop_4semDataSet.Product_availability_Shop_View);
            // TODO: данная строка кода позволяет загрузить данные в таблицу "bD_Shop_4semDataSet.Shop". При необходимости она может быть перемещена или удалена.
            this.shopTableAdapter.Fill(this.bD_Shop_4semDataSet.Shop);

            product_availability_Shop_ViewDataGridView.DataSource = product_availability_SearchTableAdapter.GetData(Int32.Parse(textBox1.Text));
        }

        private void button1_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FS = new Form_Seller();
            FS.Show();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FM = new Form_Main();
            FM.Show();
        }

        private void bindingNavigatorMoveNextItem_Click(object sender, EventArgs e)
        {
            product_availability_Shop_ViewDataGridView.DataSource = product_availability_SearchTableAdapter.GetData(Int32.Parse(textBox1.Text));
        }

        private void bindingNavigatorMovePreviousItem_Click(object sender, EventArgs e)
        {
            product_availability_Shop_ViewDataGridView.DataSource = product_availability_SearchTableAdapter.GetData(Int32.Parse(textBox1.Text));
        }

        private void button3_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FSN = new Form_Seller_NewBuy();
            FSN.Show();
        }

        private void bindingNavigatorMoveLastItem_Click(object sender, EventArgs e)
        {
            product_availability_Shop_ViewDataGridView.DataSource = product_availability_SearchTableAdapter.GetData(Int32.Parse(textBox1.Text));
        }

        private void bindingNavigatorMoveFirstItem_Click(object sender, EventArgs e)
        {
            product_availability_Shop_ViewDataGridView.DataSource = product_availability_SearchTableAdapter.GetData(Int32.Parse(textBox1.Text));
        }
    }
}
