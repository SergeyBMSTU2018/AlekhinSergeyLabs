using System;
using System.Windows.Forms;

namespace SQL_BD
{
    public partial class Form_Admin_Change_Product : Form
    {
        public Form_Admin_Change_Product()
        {
            InitializeComponent();
        }

        private void productBindingNavigatorSaveItem_Click(object sender, EventArgs e)
        {
            productTableAdapter.Update(bD_Shop_4semDataSet);
            this.Validate();
            this.productBindingSource.EndEdit();
            this.tableAdapterManager.UpdateAll(this.bD_Shop_4semDataSet);

        }

        private void Form_Admin_Change_Product_Load(object sender, EventArgs e)
        {
            // TODO: данная строка кода позволяет загрузить данные в таблицу "bD_Shop_4semDataSet.Product". При необходимости она может быть перемещена или удалена.
            this.productTableAdapter.Fill(this.bD_Shop_4semDataSet.Product);
        }

        private void button1_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FAC = new Form_Admin_Change();
            FAC.Show();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FM = new Form_Main();
            FM.Show();
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {
            productDataGridView.DataSource = product_Name_SearchTableAdapter.GetData(textBox1.Text);
        }
    }
}
