using System;
using System.Windows.Forms;

namespace SQL_BD
{
    public partial class Form_Admin_Change_Customer : Form
    {
        public Form_Admin_Change_Customer()
        {
            InitializeComponent();
        }

        private void customerBindingNavigatorSaveItem_Click(object sender, EventArgs e)
        {
            customerTableAdapter.Update(bD_Shop_4semDataSet);
            this.Validate();
            this.customerBindingSource.EndEdit();
            this.tableAdapterManager.UpdateAll(this.bD_Shop_4semDataSet);

        }

        private void Form_Admin_Change_Customer_Load(object sender, EventArgs e)
        {
            // TODO: данная строка кода позволяет загрузить данные в таблицу "bD_Shop_4semDataSet.Customer". При необходимости она может быть перемещена или удалена.
            this.customerTableAdapter.Fill(this.bD_Shop_4semDataSet.Customer);

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
            customerDataGridView.DataSource = customer_Surname_SearchTableAdapter.GetData(textBox1.Text);
        }
    }
}
