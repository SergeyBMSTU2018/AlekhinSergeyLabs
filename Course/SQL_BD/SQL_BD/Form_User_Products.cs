using System;
using System.Windows.Forms;

namespace SQL_BD
{
    public partial class Form_User_Products : Form
    {
        public Form_User_Products()
        {
            InitializeComponent();
        }

        private void User_Form2_Load(object sender, EventArgs e)
        {
            // TODO: данная строка кода позволяет загрузить данные в таблицу "bD_Shop_4semDataSet.Product_availability_View". При необходимости она может быть перемещена или удалена.
            this.product_availability_ViewTableAdapter.Fill(this.bD_Shop_4semDataSet.Product_availability_View);
            // TODO: данная строка кода позволяет загрузить данные в таблицу "bD_Shop_4semDataSet.Product". При необходимости она может быть перемещена или удалена.
            this.productTableAdapter.Fill(this.bD_Shop_4semDataSet.Product);

            product_availability_ViewDataGridView.DataSource = shop_Product_SearchTableAdapter.GetData(Int32.Parse(textBox2.Text));
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

        private void textBox1_TextChanged(object sender, EventArgs e)
        {
            dataGridView1.DataSource = product_Name_SearchTableAdapter.GetData(textBox1.Text);
            product_availability_ViewDataGridView.DataSource = shop_Product_SearchTableAdapter.GetData(Int32.Parse(textBox2.Text));
        }

        private void bindingNavigatorMoveNextItem_Click(object sender, EventArgs e)
        {
            product_availability_ViewDataGridView.DataSource = shop_Product_SearchTableAdapter.GetData(Int32.Parse(textBox2.Text));
        }

        private void bindingNavigatorMoveFirstItem_Click(object sender, EventArgs e)
        {
            product_availability_ViewDataGridView.DataSource = shop_Product_SearchTableAdapter.GetData(Int32.Parse(textBox2.Text));
        }

        private void bindingNavigatorMoveLastItem_Click(object sender, EventArgs e)
        {
            product_availability_ViewDataGridView.DataSource = shop_Product_SearchTableAdapter.GetData(Int32.Parse(textBox2.Text));
        }

        private void bindingNavigatorMovePreviousItem_Click(object sender, EventArgs e)
        {
            product_availability_ViewDataGridView.DataSource = shop_Product_SearchTableAdapter.GetData(Int32.Parse(textBox2.Text));
        }
    }
}
