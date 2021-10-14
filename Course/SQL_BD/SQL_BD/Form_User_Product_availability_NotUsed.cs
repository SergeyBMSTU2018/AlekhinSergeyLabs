using System;
using System.Windows.Forms;

namespace SQL_BD
{
    public partial class Form_User_Product_availability_NotUsed : Form
    {
        public Form_User_Product_availability_NotUsed()
        {
            InitializeComponent();
        }

        private void Form_User_Product_availabiliry_Load(object sender, EventArgs e)
        {
            // TODO: данная строка кода позволяет загрузить данные в таблицу "bD_Shop_4semDataSet.Seller". При необходимости она может быть перемещена или удалена.
            this.sellerTableAdapter.Fill(this.bD_Shop_4semDataSet.Seller);
            // TODO: данная строка кода позволяет загрузить данные в таблицу "bD_Shop_4semDataSet.Product_availability". При необходимости она может быть перемещена или удалена.
            this.product_availabilityTableAdapter.Fill(this.bD_Shop_4semDataSet.Product_availability);
            // TODO: данная строка кода позволяет загрузить данные в таблицу "bD_Shop_4semDataSet.Shop". При необходимости она может быть перемещена или удалена.
            this.shopTableAdapter.Fill(this.bD_Shop_4semDataSet.Shop);
            // TODO: данная строка кода позволяет загрузить данные в таблицу "bD_Shop_4semDataSet.Product_availability_Shop_View". При необходимости она может быть перемещена или удалена.
            this.product_availability_Shop_ViewTableAdapter.Fill(this.bD_Shop_4semDataSet.Product_availability_Shop_View);

            product_availability_Shop_ViewDataGridView.DataSource = product_availability_SearchTableAdapter.GetData(Int32.Parse(textBox1.Text));
        }

        private void bindingNavigatorMoveNextItem_Click(object sender, EventArgs e)
        {
            product_availability_Shop_ViewDataGridView.DataSource = product_availability_SearchTableAdapter.GetData(Int32.Parse(textBox1.Text));
        }

        private void bindingNavigatorMovePreviousItem_Click(object sender, EventArgs e)
        {
            product_availability_Shop_ViewDataGridView.DataSource = product_availability_SearchTableAdapter.GetData(Int32.Parse(textBox1.Text));
        }

        private void button1_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FU = new Form_User();
            FU.Show();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FM = new Form_Main();
            FM.Show();
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
