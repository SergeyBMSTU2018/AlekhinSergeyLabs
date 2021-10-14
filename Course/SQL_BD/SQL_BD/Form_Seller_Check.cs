using System;
using System.Windows.Forms;

namespace SQL_BD
{
    public partial class Form_Seller_Check : Form
    {
        public Form_Seller_Check()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            // TODO: данная строка кода позволяет загрузить данные в таблицу "BD_Shop_4semDataSet.Seller_Check". При необходимости она может быть перемещена или удалена.
            this.Seller_CheckTableAdapter.Fill(this.BD_Shop_4semDataSet.Seller_Check);

            this.reportViewer1.RefreshReport();
        }
    }
}
