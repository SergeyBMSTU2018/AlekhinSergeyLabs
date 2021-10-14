using System;
using System.Windows.Forms;

namespace SQL_BD
{
    public partial class Form_Admin_Change_Product_availability : Form
    {
        public Form_Admin_Change_Product_availability()
        {
            InitializeComponent();
        }

        private void product_availabilityBindingNavigatorSaveItem_Click(object sender, EventArgs e)
        {
            product_availabilityTableAdapter.Update(bD_Shop_4semDataSet);
            this.Validate();
            this.product_availabilityBindingSource.EndEdit();
            this.tableAdapterManager.UpdateAll(this.bD_Shop_4semDataSet);
        }

        private void Form_Admin_Change_Product_availability_Load(object sender, EventArgs e)
        {
            // TODO: данная строка кода позволяет загрузить данные в таблицу "bD_Shop_4semDataSet.Product_availability_View". При необходимости она может быть перемещена или удалена.
            this.product_availability_ViewTableAdapter.Fill(this.bD_Shop_4semDataSet.Product_availability_View);
            // TODO: данная строка кода позволяет загрузить данные в таблицу "bD_Shop_4semDataSet.Product_availability". При необходимости она может быть перемещена или удалена.
            this.product_availabilityTableAdapter.Fill(this.bD_Shop_4semDataSet.Product_availability);
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
    }
}
